import clsx from 'clsx';
import css from './Container.module.css';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<'div'> {}

export const Container = ({ className, ...props }: Props) => (
	<div className={clsx(css.container, className)} {...props} />
);

interface SectionProps extends ComponentProps<'section'> {}

Container.Section = ({ className, ...props }: SectionProps) => (
	<section className={clsx(css.section, className)} {...props} />
);
