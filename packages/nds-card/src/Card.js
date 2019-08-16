import React from "react";
import PropTypes from "prop-types";
import "../scss/card.scss";

export const Card = props => {
	const {
		headingText,
		destination,
		linkType: LinkType = "a",
		headingTag: HeadingTag = "p"
	} = props.heading;

	const { metadata } = props;

	const linkProps = {};

	if (LinkType === "a") {
		linkProps.href = destination;
	} else {
		linkProps.to = destination;
	}

	return (
		<article className="card">
			<header className="card__header">
				<HeadingTag className="card__heading">
					<LinkType {...linkProps}>{headingText}</LinkType>
				</HeadingTag>
			</header>
			{metadata && metadata.length && (
				<dl className="card__metadata">
					{metadata.map((item, idx) => {
						return (
							<div key={`item${idx}`} className="card__metadatum">
								{item.label && (
									<dt className="visually-hidden">{item.label}</dt>
								)}
								<dd>{item.value}</dd>
							</div>
						);
					})}
				</dl>
			)}
		</article>
	);
};

export default Card;

Card.propTypes = {
	heading: PropTypes.shape({
		headingText: PropTypes.node.isRequired,
		destination: PropTypes.node,
		linkType: PropTypes.node,
		headingTag: PropTypes.node
	}),
	metadata: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.node,
			value: PropTypes.node.isRequired
		})
	)
};
