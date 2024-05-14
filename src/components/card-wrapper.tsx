import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import React from "react";

interface CardWrapperProps {
  title?: string;
  description?: string;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const CardWrapper = ({
  title,
  description,
  body,
  footer,
  className,
}: CardWrapperProps) => {
  return (
    <Card className={cn("bg-secondary", className)}>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      )}
      {body && <CardContent>{body}</CardContent>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};
