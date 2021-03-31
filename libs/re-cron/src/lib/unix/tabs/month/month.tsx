import React from 'react';
import { Segment, QuartzService, Mode, Type } from '@sbzen/cron-core';

import { SimpleEvery, SimpleAnd, SimpleRange } from './../../../shared';
import { UnixTabSingleSegmentComponent } from './../tab-single-segment.abstract';
import { SimpleIncrement } from './../shared';

export class UnixCronMonth extends UnixTabSingleSegmentComponent {
	private readonly uiService = this.getQuartzCron();
	private readonly uiServiceApi = this.uiService.getApi<Type.MONTH>(Type.MONTH);
	private readonly monthCodes = QuartzService.getMonthCodes();
	private readonly monthes = QuartzService.getList(Segment.month);

	constructor(props) {
		super(props, [Segment.month]);
	}

	protected genEvery() {
		return (
			<SimpleEvery
				cssClassPrefix={this.getCssClassPrefix()}
				checked={this.uiServiceApi.isEverySelected()}
				disabled={this.uiService.isDisabled()}
				segmentId={this.genId(Mode.EVERY)}
				onSelect={() => this.uiServiceApi.selectEvery()}
				label={this.props.localization.unix.month.every.label}/>
		);
	}

	protected genIncrement() {
		return (
			<SimpleIncrement
				cssClassPrefix={this.getCssClassPrefix()}
				segmentId={this.genId(Mode.INCREMENT)}
				checked={this.uiServiceApi.isIncrementSelected()}
				disabled={this.uiService.isDisabled()}
				disabledControls={this.uiServiceApi.isIncrementControlsDisabled()}
				onSelect={() => this.uiServiceApi.selectIncrement()}
				label1={this.props.localization.unix.month.increment.label1}
				label2={this.props.localization.unix.month.increment.label2}
				primaryOptions={this.monthes.map(({ value }, i) => ({ value, label: i + 1 }))}
				primaryValue={this.uiServiceApi.getIncrementPrimaryValue()}
				onPrimaryValueChange={this.uiServiceApi.setIncrementPrimaryValue}/>
		);
	}

	protected genAnd() {
		return (
			<SimpleAnd
				cssClassPrefix={this.getCssClassPrefix()}
				gridSize="col-2"
				segmentId={this.genId(Mode.AND)}
				checked={this.uiServiceApi.isAndSelected()}
				disabled={this.uiService.isDisabled()}
				disabledControls={this.uiServiceApi.isAndControlsDisabled()}
				onSelect={() => this.uiServiceApi.selectAnd()}
				label={this.props.localization.unix.month.and.label}
				onValueChange={this.uiServiceApi.selectAndValue}
				isValueSelected={value => this.uiServiceApi.isSelectedAndValue(value)}
				options={this.monthCodes.map(v => ({ ...v, label: this.props.localization.common.month[v.label.toLowerCase()] }))}/>
		);
	}

	protected genRange() {
		return (
			<SimpleRange
				cssClassPrefix={this.getCssClassPrefix()}
				segmentId={this.genId(Mode.RANGE)}
				checked={this.uiServiceApi.isRangeSelected()}
				disabled={this.uiService.isDisabled()}
				onSelect={() => this.uiServiceApi.selectRange()}
				disabledControls={this.uiServiceApi.isRangeControlsDisabled()}
				label1={this.props.localization.unix.month.range.label1}
				label2={this.props.localization.unix.month.range.label2}
				primaryOptions={this.monthes.map((v) => ({ ...v, label: this.props.localization.common.month[v.label.toLowerCase()] }))}
				primaryValue={this.uiServiceApi.getRangePrimaryValue()}
				onPrimaryValueChange={this.uiServiceApi.setRangePrimaryValue}
				secondaryOptions={this.monthes.map((v) => ({ ...v, label: this.props.localization.common.month[v.label.toLowerCase()] }))}
				secondaryValue={this.uiServiceApi.getRangeSecondaryValue()}
				onSecondaryValueChange={this.uiServiceApi.setRangeSecondaryValue}/>
		);
	}
}