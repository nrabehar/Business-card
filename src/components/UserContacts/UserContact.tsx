import clsx from 'clsx';
import { ComponentProps, useEffect, useState } from 'react';
import css from './UserContact.module.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';
import { capitalize } from '../../utils';
import * as FontAwesome from 'react-icons/fa6';

interface IUserContact extends ComponentProps<'section'> {
	email: string;
	phone: string;
	social_links?: {
		[name: string]: string;
	};
}

export const UserContact = ({
	email,
	phone,
	social_links,
	className,
	...props
}: IUserContact) => {
	return (
		<section className={clsx(css.contacts, className)} {...props}>
			<SingleContact
				title='email'
				value={email}
				icon={<FaEnvelope />}
				link_to={`mailto:${email}`}
			/>
			<SingleContact
				title='phone'
				value={phone}
				icon={<FaPhone />}
				link_to={`tel:${phone}`}
			/>
			<ContactDivider />
      <ContactSocials social_links={social_links} />
		</section>
	);
};

type TContact = {
	icon: React.ReactElement;
	title: string;
	value: string;
	link_to?: string;
};

const SingleContact = ({ icon, title, value, link_to }: TContact) => {
	return (
		<div className={clsx(css.contact_block)}>
			<div className={clsx(css.title)}>
				{icon}
				<h4>{capitalize(title)}</h4>
			</div>
			{link_to ? (
				<a href={link_to} className={clsx(css.content)}>
					{value}
				</a>
			) : (
				<span className={clsx(css.content)}>{value}</span>
			)}
		</div>
	);
};

const ContactDivider = () => <div className={clsx(css.contact_divider)} />;

interface ISocialLink {
	link: string;
	icon: Function;
}

const ContactSocials = ({
	social_links
}: Omit<IUserContact, 'email' | 'phone'>) => {
	const [links, setLinks] = useState<ISocialLink[]>([]);

	const add_link = (link: ISocialLink) => {
		const clone = [...links, link];
		setLinks(clone);
	};

	useEffect(() => {
		for (const key in social_links) {
			if (Object.prototype.hasOwnProperty.call(social_links, key)) {
				const link = social_links[key];
				const iconName = `Fa${capitalize(key)}`;
				add_link({
					link,
					icon: (FontAwesome as any)[iconName],
				});
			}
		}
		return () => {
			setLinks([]);
		};
	}, []);

	return (
		<div className={clsx(css.social_links)}>
			<h4>Find me on</h4>
			<div className={clsx(css.icons)}>
				{links.map((link, k) => (
					<SocialLink key={k} {...link} />
				))}
			</div>
		</div>
	);
};

const SocialLink = ({ link, icon }: ISocialLink) => {
	return (
		<a href={link} className={clsx(css.icon)}>
			{icon()}
		</a>
	);
};

export type { IUserContact };
