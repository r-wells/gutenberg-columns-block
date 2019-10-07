const { Component } = wp.element;
const { RichText } = wp.editor;
const { __ } = wp.i18n;

class TeamMember extends Component {
	onChangeTitle = title => {
		this.props.setAttributes({ title });
	};
	onChangeInfo = info => {
		this.props.setAttributes({ info });
	};

	render() {
		const { className, attributes, setAttributes } = this.props;
		const { title, info } = attributes;
		return (
			<div className={className}>
				<RichText
					className={"wp-block-mytheme-blocks-team-member__title"}
					tagName="h4"
					onChange={this.onChangeTitle}
					value={title}
					placeholder={__("Member Name", "mytheme-blocks")}
					formattingControls={[]}
				/>
				<RichText
					className={"wp-block-mytheme-blocks-team-member__info"}
					tagName="p"
					onChange={this.onChangeInfo}
					value={info}
					placeholder={__("Member Info", "mytheme-blocks")}
					formattingControls={[]}
				/>
			</div>
		);
	}
}

export default TeamMember;
