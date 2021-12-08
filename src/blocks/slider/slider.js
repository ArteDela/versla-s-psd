mainObj.slider =
{
	init()
	{
		$('.slider-list').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow:$('.prev-arrow'),
			nextArrow:$('.next-arrow')
		});
	}
}