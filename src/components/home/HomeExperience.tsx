import { useEffect, useRef, useState } from "react";
import {
  motion,
  MotionConfig,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
  type MotionStyle,
} from "motion/react";
import { chapters, type Chapter } from "../../data/chapters";
import styles from "./HomeExperience.module.css";

type ChapterLayerProps = {
  chapter: Chapter;
  index: number;
  activeIndex: number;
  progress: MotionValue<number>;
  reducedMotion: boolean;
};

function ChapterLayer({ chapter, index, activeIndex, progress, reducedMotion }: ChapterLayerProps) {
  const count = chapters.length;
  const center = index / (count - 1);
  const edge = 0.13;
  const opacity = useTransform(
    progress,
    [center - edge, center - edge * 0.45, center, center + edge * 0.45, center + edge],
    [0, 0.25, 1, 0.25, 0],
  );
  const scale = useTransform(
    progress,
    [center - edge, center, center + edge],
    reducedMotion ? [1, 1, 1] : [0.84, 1, 1.2],
  );
  const imageScale = useTransform(
    progress,
    [center - edge, center, center + edge],
    reducedMotion ? [1, 1, 1] : [0.76, 1, 1.34],
  );
  const imageY = useTransform(
    progress,
    [center - edge, center, center + edge],
    reducedMotion ? [0, 0, 0] : [70, 0, -55],
  );
  const copyX = useTransform(
    progress,
    [center - edge, center, center + edge],
    reducedMotion ? [0, 0, 0] : [index % 2 === 0 ? -56 : 56, 0, index % 2 === 0 ? 36 : -36],
  );

  const chapterStyle = {
    opacity,
    scale,
    "--chapter-accent": chapter.accent,
  } as MotionStyle & { "--chapter-accent": string };

  return (
    <motion.section
      className={`${styles.chapter} ${chapter.id === "pausa" ? styles.lightChapter : ""} ${activeIndex === index ? styles.activeChapter : ""}`}
      id={chapter.id}
      aria-labelledby={`title-${chapter.id}`}
      style={chapterStyle}
    >
      <motion.div className={styles.copy} style={{ x: copyX }}>
        <p className={styles.eyebrow}>
          <time dateTime={chapter.hour}>{chapter.hour}</time>
          <span>{chapter.eyebrow}</span>
        </p>
        <h1 id={`title-${chapter.id}`}>{chapter.title}</h1>
        <p className={styles.body}>{chapter.body}</p>
        {index === 0 && <p className={styles.scrollHint}>Scorri per entrare nella giornata</p>}
        {index === chapters.length - 1 && (
          <div className={styles.actions}>
            <a href="/menu">Scopri il menu</a>
            <a href="/contatti">Orari e contatti</a>
          </div>
        )}
      </motion.div>
      <motion.figure className={styles.imageFrame} style={{ scale: imageScale, y: imageY }}>
        <img src={chapter.image} alt={chapter.imageAlt} width="1200" height="1500" loading={index === 0 ? "eager" : "lazy"} />
        <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      </motion.figure>
    </motion.section>
  );
}

export default function HomeExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = Boolean(useReducedMotion());
  const [enhanced, setEnhanced] = useState(false);
  const [active, setActive] = useState(0);
  const scrollProgress = useMotionValue(0);
  const camera = useSpring(scrollProgress, { stiffness: 95, damping: 26, mass: 0.42 });
  const background = useTransform(camera, chapters.map((_, index) => index / (chapters.length - 1)), chapters.map((chapter) => chapter.background));

  useEffect(() => setEnhanced(true), []);

  useEffect(() => {
    if (!enhanced) return;

    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const root = rootRef.current;
      if (!root) return;

      const start = root.getBoundingClientRect().top + window.scrollY;
      const distance = Math.max(root.offsetHeight - window.innerHeight, 1);
      const next = Math.min(1, Math.max(0, (window.scrollY - start) / distance));
      scrollProgress.set(next);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    frame = window.requestAnimationFrame(updateProgress);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [enhanced, scrollProgress]);

  useMotionValueEvent(camera, "change", (value) => {
    const next = Math.min(chapters.length - 1, Math.max(0, Math.round(value * (chapters.length - 1))));
    setActive((current) => (current === next ? current : next));
  });

  function goTo(index: number) {
    const root = rootRef.current;
    if (!root) return;
    if (!enhanced) {
      document.getElementById(chapters[index]?.id ?? "")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    const start = root.getBoundingClientRect().top + window.scrollY;
    const available = Math.max(root.offsetHeight - window.innerHeight, 0);
    window.scrollTo({
      top: start + available * (index / (chapters.length - 1)),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <MotionConfig reducedMotion="user">
      <div ref={rootRef} className={`${styles.experience} ${enhanced ? styles.enhanced : ""}`}>
        <motion.div className={styles.stage} style={{ backgroundColor: enhanced ? background : chapters[0]!.background }}>
          <div className={styles.chapters}>
            {chapters.map((chapter, index) => (
              <ChapterLayer
                key={chapter.id}
                chapter={chapter}
                index={index}
                activeIndex={active}
                progress={camera}
                reducedMotion={reduceMotion}
              />
            ))}
          </div>

          <p className={styles.timelineMeta} aria-live="polite">
            <span>{String(active + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}</span>
            <strong>{chapters[active]?.eyebrow}</strong>
          </p>

          <nav className={styles.timeline} aria-label="Momenti della giornata">
            <ol>
              {chapters.map((chapter, index) => (
                <li key={chapter.id}>
                  <button
                    type="button"
                    className={active === index ? styles.active : ""}
                    aria-current={active === index ? "step" : undefined}
                    aria-label={`Vai a ${chapter.eyebrow}, ore ${chapter.hour}`}
                    onClick={() => goTo(index)}
                  >
                    <span>{chapter.hour}</span>
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        </motion.div>
      </div>
    </MotionConfig>
  );
}
