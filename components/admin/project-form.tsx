"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { projectSchema, type ProjectFormValues } from "@/lib/validations/project";
import { createProject } from "@/lib/api/projects";
import { FormFields } from "./project-form/form-fields";

export function ProjectForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      imageUrl: "",
      figmaUrl: "",
      demoUrl: "",
      githubUrl: "",
      isIframe: "",
      topics: "",
    },
  });

  async function onSubmit(values: ProjectFormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          topics: values.topics.split(",").map((topic) => topic.trim()),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create project");
      }

      toast({
        title: "Success!",
        description: "Project has been created.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create project. Please try again.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormFields form={form} />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Project"}
        </Button>
      </form>
    </Form>
  );
}