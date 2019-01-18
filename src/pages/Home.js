import React from 'react';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption
} from 'reactstrap';

const items = [
	{
		src: 'https://picsum.photos/1000/391/?image=866',
		altText: 'Best Items',
		caption: 'Best Items'
	},
	{
		src: 'https://picsum.photos/1000/391/?image=865',
		altText: 'Artist',
		caption: 'Artist'
	},
	{
		src: 'https://picsum.photos/1000/391/?image=867',
		altText: 'Event',
		caption: 'Event'
	}
];

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	render() {
		const { activeIndex } = this.state;

		const slides = items.map((item) => {
			return (
				<CarouselItem
					onExiting={this.onExiting}
					onExited={this.onExited}
					key={item.src}
				>
					<img src={item.src} alt={item.altText} />
					<CarouselCaption captionText={item.caption} captionHeader={item.caption} />
				</CarouselItem>
			);
		});

		return (
			<div className='container' style={{paddingTop:'80px'}}>
				<Carousel
					activeIndex={activeIndex}
					next={this.next}
					previous={this.previous}
				>
					<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
					{slides}
					<CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
					<CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
				</Carousel>
			</div>
		)
	}
}

export default Home;