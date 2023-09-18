import { Box, Paper, Title } from "@mantine/core";
import { FC, ReactNode } from "react";

type PageContentProps = {
  children?: ReactNode;
  title: string;
  className?: string;
  outerTitle?: boolean;
  defaultButtons?: boolean;
  defaultButtonsProps?: DefaultButtonsProps;
  style?: object;
};

type ButtonProps = {
  text: string;
  href?: string;
};

type DefaultButtonsProps = {
  payload?: Object | undefined;
  saveButton?: ButtonProps | undefined;
  saveButtonFn?: any;
  isSave?: any;
  isProcess?: any;
  processButton: ButtonProps | undefined;
  backStageButton: ButtonProps | undefined;
  processButtonFn: any;
  cancelButton: ButtonProps | undefined;
};

export const PageContent: FC<Partial<PageContentProps>> = ({
  children,
  title,
  outerTitle,
  className,
  style,
}) => {
  return (
    <>
      <Box className={className} style={style}>
        {outerTitle ? (
          <Title order={2} mb="sm">
            {title}
          </Title>
        ) : null}
        <Paper shadow="xs" p="md">
          {outerTitle ? null : (
            <Title order={2} mb="sm">
              {title}
            </Title>
          )}
          {children}
        </Paper>
      </Box>
    </>
  );
};
