import "./editor.scss";
import "./style.scss";

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const el = wp.element.createElement;
const { RichText } = wp.editor;
const {} = wp.components;
import Edit from "./edit";

registerBlockType("cgb/secondblock", {
	title: __("Second Block", "mytheme-blocks"),
	description: __("My second block registered", "mytheme-blocks"),
	category: "layout",
	style: [
		{
			name: "rounded",
			label: "Rounded Corners",
			isDefault: true
		},
		{
			name: "outline",
			label: "Outline",
			isDefault: false
		},
		{
			name: "squared",
			label: "Squared",
			isDefault: false
		}
	],
	attributes: {
		content: {
			type: "string",
			source: "html",
			selector: "p"
		},
		alignment: {
			type: "string"
		},
		backgroundColor: {
			type: "string"
		},
		textColor: {
			type: "string"
		},
		customBackgroundColor: {
			type: "string"
		},
		customTextColor: {
			type: "string"
		}
	},

	edit: Edit,

	save: ({ attributes }) => {
		const { content, alignment, backgroundColor, textColor } = attributes;
		return (
			<RichText.Content
				tagName="p"
				value={content}
				style={{
					textAlign: alignment,
					backgroundColor: backgroundColor,
					color: textColor
				}}
			/>
		);
	}
});
