import * as z from "zod"

export const projectSchema = z
  .object({
    title: z.string().min(2, "Title must be at least 2 characters"),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters"),
    imageUrl: z.string().url("Must be a valid URL").optional().nullable(),
    figmaUrl: z.string().optional().nullable().refine(
      (url) => !url || url.trim().length === 0 || /^https?:\/\/.+\..+/.test(url),
      { message: "Must be a valid URL" }
    ),
    demoUrl: z.string().optional().nullable(),
    githubUrl: z.string().optional().nullable().refine(
      (url) => !url || url.trim().length === 0 || /^https?:\/\/.+\..+/.test(url),
      { message: "Must be a valid URL" }
    ),
    isIframe: z.string().optional().nullable(),
    topics: z.string(),
  })
  .superRefine((data, ctx) => {
    const hasFigma = data.figmaUrl && data.figmaUrl.trim().length > 0
    const hasGithub = data.githubUrl && data.githubUrl.trim().length > 0

    if (!hasFigma && !hasGithub) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Either Figma URL or GitHub URL must be provided",
        path: ["figmaUrl"]
      })
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Either Figma URL or GitHub URL must be provided",
        path: ["githubUrl"]
      })
    } else if (hasFigma && hasGithub) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Only one URL can be provided",
        path: ["figmaUrl"]
      })
    }
  })

export type ProjectFormValues = z.infer<typeof projectSchema>
