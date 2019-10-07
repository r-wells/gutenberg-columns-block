const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const el = wp.element.createElement;
const { RichText, InnerBlocks, InspectorControls } = wp.editor;
const { PanelBody, RangeControl } = wp.components;

const TEMPLATE = [["cgb/team-member"], ["cgb/team-member"]];

const attributes = {
	columns: {
		type: "number",
		default: 2
	}
};

registerBlockType("mytheme-blocks/team-members", {
	title: __("Team Member Block", "mytheme-blocks"),
	description: __("Team Members Block", "mytheme-blocks"),
	category: "layout",
	attributes,

	edit: ({ className, attributes, setAttributes }) => {
		const { columns } = attributes;

		return (
			<div className={`${className} has-${columns}-columns`}>
				<InspectorControls>
					<PanelBody>
						<RangeControl
							label={__("Columns", "mytheme-blocks")}
							value={columns}
							onChange={columns => setAttributes({ columns })}
							min={1}
							max={6}
						/>
					</PanelBody>
				</InspectorControls>
				<InnerBlocks allowedBlocks={["cgb/team-member"]} template={TEMPLATE} />
			</div>
		);
	},

	save: ({ attributes }) => {
		const { columns } = attributes;
		return (
			<div className={`has-${columns}-columns`}>
				<InnerBlocks.Content />
			</div>
		);
	}
});
