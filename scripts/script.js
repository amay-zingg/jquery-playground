// * * * * INIT PIECES
// init = function () {
//     // scroll();
//     // navMenu();
// };

// * * * * DOCUMENT READY
$(() => {
    // init();

    $("p").draggable();

}); // * * * * END OF DOCUMENT READY

// * * * * SMOOTH SCROLLING ON SAME PAGE LINKS
// const scroll = function () {
//     $("a[href^=\\#]").click(function (e) {
//         e.preventDefault();
//         var dest = $(this).attr('href');
//         console.log(dest);
//         $('html,body').animate(
//             { scrollTop: $(dest).offset().top }
//             , 'slow'
//         );
//     });
// };

// * * * * works with id="smooth"

// * * * * RESPONSIVE MENU
// const navMenu = function () {
//     // * * * * MENU CLICK OUTSIDE
//     $(document).on("click", function(event){
//     if(!$(event.target).closest(".responsive-nav-button").length){
//         $(".responsive-nav").slideUp("fast");
//         }
//     });

//     $( ".responsive-nav-button" ).click(function() {
//         $( ".responsive-nav" ).toggle("slow");
//     });
// };

// * * * * LANDING PAGE BLOG POSTS
// const blogPostArray = [
//     {
//         title: "I'm title 1",
//         image: "./assets/pattern/PatternBone-Full.jpg",
//         imageAlt: "Pattern Print Blue Bones | Frizz Kid Art",
//         postContent: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis accusantium necessitatibus sed deleniti tempore accusamus saepe laboriosam dolorem, cum veritatis odio quae aperiam voluptatibus dicta eius? Cupiditate praesentium ab in.",
//         link: "blog-article.html"
//     },
//      {
//         title: "I'm title 2",
//         image: "./assets/pattern/PatternBone-Full.jpg",
//         imageAlt: "Pattern Print Blue Bones | Frizz Kid Art",
//         postContent: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis accusantium necessitatibus sed deleniti tempore accusamus saepe laboriosam dolorem, cum veritatis odio quae aperiam voluptatibus dicta eius? Cupiditate praesentium ab in.",
//         link: "blog-article.html"
//     }

// ]

// * * * * TRUNCATE
// const truncate = function(text,limit, after) {
//     let content = text.split(" ").slice(0, limit);
//     content = content.join(" ") + (after ? after : "");
//     return content;
// }

// * * * * PUT POSTS ON PAGE
// const displayBlogPost = () => {

//     const blogPost = blogPostArray.map((post) => {
//         const content = truncate(post.postContent, 20, "...")
//         return `<div class="blog-post-single">
//                 <img src="${post.image}" alt="${post.imageAlt}">
//                 <h3>${post.title}</h3>
//                 <p>${content}</p>
//                 <div class="button-box">
//                     <a href="${post.link}" class="frizz-button">Read More</a>
//                 </div>
//                 </div>
//         `
//     })
//     $(".blog-post-container").append(blogPost)
// }




// TweenMax.to('.circle', 2, {x: 150, y: 150, borderRadius: '40%' });

// TweenMax.to('.square', 2, {x: -150, y: -150, scale: 2, delay: 1, ease: Back.easeOut });

// TweenMax.from('#rectangle', 2, {y:200, rotation: 180, scale: 1.5 });

// * * * * ADDED JQUERY

// TweenMax.to($('.circle'), 2, { x: 150, y: 150, borderRadius: '40%' });

// TweenMax.to($('.square'), 2, { x: -150, y: -150, scale: 2, delay: 1, ease: Back.easeOut });

// TweenMax.from($('#rectangle'), 2, { y: 200, rotation: 180, scale: 1.5 });

// TweenMax.to($('li:first-child'), 3, { x: 130 });
// TweenMax.to($('li:nth-child(3)'), 3, { x: 80 });
// TweenMax.from($('li:nth-child(odd)'), 3, { scale: 1.5 });

// * * * * SECOND PAGE

// TweenMax.to('.circle2', 0.75, {x: 100});
// TweenMax.to('.square2', 0.75, {x: 100, delay: 1});
// TweenMax.to('.rectangle2', 0.75, {x: 100, delay: 2});


// * * * * USING A TIMELINE
// var tlanimation = new TimelineMax({repeat: 3, repeatDelay: 1});

// tlanimation.to('.circle2', 1, {x: 100, ease: Elastic.easeIn})
// .to('.square2', 1, {x: 100, ease: Back.easeIn})
// .to('.rectangle2', 1, {x: 100, ease: Bounce.easeOut});


// * * * * USING .staggerFrom/.staggerTo
// TweenMax.staggerFrom('.triangle', 1, {x: 100, y: 100, opacity: 0, ease: Back.easeOut}, 0.2);
// TweenMax.staggerTo('.triangle', 1, {x: 200, y: 200, opacity: 0}, 0.2);


// * * * * USING .set and yoyo
// TweenMax.set('.oval', { x: -100 });

// var tlanimation2 = new TimelineMax({ repeat: 3, yoyo: true });

// tlanimation2.to('.oval', 1, { x: 100 });
// .to('.oval', 1, {x: -100});


// * * * * UNDERSTANDING LABELS
// Used labels to make animations execute at the same time
// var tlanimation3 = new TimelineMax();

// tlanimation3.to('.circle2', 1, { x: 100, ease: Elastic.easeOut }, 'circleRectangle')
//     .to('.square2', 1, { x: 100, ease: Back.easeIn })
//     .to('.rectangle2', 1, { x: 100, ease: Elastic.easeOut }, 'circleRectangle');



// * * * * PLAYBACK CONTROLS
// var tlshapes = new TimelineMax();

// tlshapes.staggerFrom('.shape', 0.5, { x: 50, y: 50, opacity: 0 }, 0.2);

// $('.playButton').click(function () {
//     tlshapes.play();
// });

// $('.pauseButton').click(function () {
//     tlshapes.pause();
// });

// $('.resumeButton').click(function () {
//     tlshapes.resume();
// });

// $('.reverseButton').click(function () {
//     tlshapes.reverse();
// });

// $('.slowButton').click(function () {
//     tlshapes.timeScale(0.5);
// });

// $('.fastButton').click(function () {
//     tlshapes.timeScale(1.5);
// });

// $('.seekButton').click(function () {
//     tlshapes.seek(2);
// });

// $('.progressButton').click(function () {
//     tlshapes.progress(0.6);
// });

// * * * * .staggerFromTo
// Used to set the initial position and ending position in same line
// TweenMax.fromTo('.triangle', 1, {x: 100, scale: 0}, {x: 50, scale: 1.5});

// TweenMax.staggerFromTo('.triangle', 1, {x: 100, y: 100}, {x: 50, y: 50}, 0.2);