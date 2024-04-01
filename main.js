const scrollRevealOption = { //Object with animation specifications
    distance: "40px",
    origin: "bottom",
    duration:1000,
};

//Calling the constructor for instance and using the reveal method
//on h1
ScrollReveal().reveal(".header_container h1", scrollRevealOption)

//delay in h4
ScrollReveal().reveal(".header_container h4", {
    ...scrollRevealOption,
    delay: 500,
})

//delay in button
ScrollReveal().reveal(".header_container .btn", {
    ...scrollRevealOption,
    delay: 1000,
})

//About Container
ScrollReveal().reveal(".about_container .section_header", scrollRevealOption);

ScrollReveal().reveal(".about_container .section_subheader", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about_container .about_flex", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about_container .btn", {
    ...scrollRevealOption,
    delay: 1500,
});

//Discover Conatiner
ScrollReveal().reveal(".discover_card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".discover_card_content", {
    ...scrollRevealOption,
    interval: 500,
    delay: 200,
});

//Blogs container
ScrollReveal().reveal(".blogs_card", {
    duration: 1000,
    interval:400,
})

//Journals container
ScrollReveal().reveal(".journals_card", {
    interval:400,
})

//Logo container
ScrollReveal().reveal(".hero_container img", {
    distance: "60px",
    origin: "right",
    duration:1000,
})

//Gallery container
ScrollReveal().reveal(".gallery_card", {
    interval:300,
})
