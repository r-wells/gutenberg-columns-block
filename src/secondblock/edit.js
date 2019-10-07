import "./editor.scss";
import "./style.scss";

const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const el = wp.element.createElement;
const {
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
	withColors
} = wp.editor;
const {
	Toolbar,
	DropdownMenu,
	PanelBody,
	ToggleControl,
	ColorPalette
} = wp.components;

class Edit extends Component {
	onChangeContent = content => {
		this.props.setAttributes({ content });
	};

	onChangeAlignment = alignment => {
		this.props.setAttributes({ alignment });
	};

	// onChangeBackgroundColor = backgroundColor => {
	// 	this.props.setAttributes({ backgroundColor });
	// };

	// onChangeTextColor = textColor => {
	// 	this.props.setAttributes({ textColor });
	// };

	render() {
		const {
			className,
			attributes,
			setTextColor,
			setBackgroundColor,
			backgroundColor,
			textColor
		} = this.props;
		const { content, alignment } = attributes;

		return (
			<Fragment>
				<InspectorControls>
					<PanelColorSettings
						title="Panel Color Settings"
						colorSettings={[
							{
								value: backgroundColor.color,
								onChange: setBackgroundColor,
								label: "Change the background"
							},
							{
								value: textColor.color,
								onChange: setTextColor,
								label: "Change the text color"
							}
						]}
					/>
				</InspectorControls>
				<BlockControls
					controls={[
						{
							icon: "wordpress",
							title: __("Test")
							// onClick: () => onChangeAlignment("right")
						}
					]}
				>
					<Toolbar>
						<DropdownMenu
							icon="editor-table"
							label="Label"
							controls={[
								{
									icon: "wordpress",
									title: __("Test"),
									onClick: () => console.log(true)
								}
							]}
						/>
					</Toolbar>
					<AlignmentToolbar
						value={alignment}
						onChange={this.onChangeAlignment}
					/>
				</BlockControls>
				<RichText
					tagName="p"
					className={className}
					onChange={this.onChangeContent}
					value={content}
					style={{
						textAlign: alignment,
						backgroundColor: backgroundColor.color,
						color: textColor.color
					}}
				/>
			</Fragment>
		);
	}
}

export default withColors("backgroundColor", { textColor: "color" })(Edit);
