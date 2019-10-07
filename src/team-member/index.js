import "./style.editor.scss";
import "./style.scss";

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const el = wp.element.createElement;
const { RichText } = wp.editor;
import TeamMember from "./edit";
import "./parent";

const attributes = {
	title: {
		type: "string",
		source: "html",
		selector: "h4"
	},
	info: {
		type: "string",
		source: "html",
		selector: "p"
	}
};

registerBlockType("mytheme-blocks/team-member", {
	title: __("Team Member", "mytheme-blocks"),
	description: __("Team Member Block", "mytheme-blocks"),
	category: "layout",
	parent: ["mytheme-blocks/team-members"],
	attributes,

	edit: TeamMember,

	save: ({ attributes }) => {
		const { title, info } = attributes;
		return (
			<div>
				{title && (
					<RichText.Content
						className={"wp-block-mytheme-blocks-team-member__title"}
						tagName="h4"
						value={title}
					/>
				)}
				{info && (
					<RichText.Content
						className={"wp-block-mytheme-blocks-team-member__info"}
						tagName="p"
						value={info}
					/>
				)}
			</div>
		);
	}
});
