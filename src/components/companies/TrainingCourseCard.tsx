import Image from "next/image";
import type { TrainingCourse } from "@/lib/training-content";

/**
 * One module of the training programme: stage pill, title, lead line, body
 * copy and its tag pills, with a square still to the right.
 *
 * The still is desktop-only — the mobile frame drops it and lets the copy run
 * the full width of the card.
 */
export function TrainingCourseCard({ course }: { course: TrainingCourse }) {
  return (
    <article className="flex w-full items-center gap-[52px] overflow-hidden rounded-2xl border border-border-primary bg-surface p-8 lg:min-h-[348px]">
      <div className="flex min-w-0 flex-1 flex-col items-start gap-4">
        <span className="rounded-full bg-[rgba(237,223,203,0.5)] px-2 py-1 text-sm font-medium text-role">
          {course.code}
        </span>

        <div className="flex w-full flex-col items-start gap-3">
          <h3 className="w-full text-display-xs font-medium text-title">
            {course.title}
          </h3>
          <p className="w-full text-lg font-medium text-title">{course.lead}</p>

          <div className="flex w-full flex-col gap-3.5 text-sm text-subtitle">
            {course.body.map((paragraph) => (
              <p key={paragraph.map((run) => run.text).join("")}>
                {paragraph.map((run) =>
                  run.bold ? (
                    <strong key={run.text} className="font-semibold text-title">
                      {run.text}
                    </strong>
                  ) : (
                    run.text
                  ),
                )}
              </p>
            ))}
          </div>
        </div>

        <ul className="flex w-full flex-wrap items-start gap-2">
          {course.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-[100px] border border-[#e1e5e3] bg-surface px-4 py-2 text-sm font-medium text-[#2e3c37]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative hidden size-[200px] shrink-0 overflow-hidden rounded-xl bg-white lg:block">
        <Image
          src={course.image}
          alt=""
          fill
          sizes="200px"
          quality={75}
          className="object-cover"
        />
      </div>
    </article>
  );
}
