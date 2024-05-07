// home page
// Get the button element and the SVG path element
const button = document.querySelector('.try-free-btn-1');
const button_2 = document.querySelector('.try-free-btn-2');

const pathElement = document.querySelector('#arrow-path');
const pathElement_2 = document.querySelector('#arrow-path-bt');

// Define the original and new d attribute values
const originalD = 'M21 7L1 7M21 7L15.0511 1M21 7L15.0511 13';
const newD = 'M25 7L1 7M25 7L19.0511 1M25 7L19.0511 13';

// Add event listeners to the button
if (button) {
    button.addEventListener('mouseover', () => {
        // Change the d attribute to the new value when hovered
        pathElement.setAttribute('d', newD);
    });
    button.addEventListener('mouseout', () => {
        // Revert the d attribute to the original value when not hovered
        pathElement.setAttribute('d', originalD);
    });
}

if (button_2) {
    button_2.addEventListener('mouseover', () => {
        // Change the d attribute to the new value when hovered
        pathElement_2.setAttribute('d', newD);
    });

    button_2.addEventListener('mouseout', () => {
        // Revert the d attribute to the original value when not hovered
        pathElement_2.setAttribute('d', originalD);
    });
}

// pricing page
const pricingFreeBtn = document.querySelector('.free-plan-btn');
const pricingBasicBtn = document.querySelector('.basic-plan-btn');
const pricingGrowthBtn = document.querySelector('.growth-plan-btn');
const tryFreeBtnStremlinig = document.querySelector('.try-free-btn-stremlinig');

const arrowPathPrFree = document.querySelector('#arrow-path-pr-free');
const arrowPathPrBasic = document.querySelector('#arrow-path-pr-basic');
const arrowPathPrGrowth = document.querySelector('#arrow-path-pr-growth');
const arrowPathStremlining = document.querySelector('#arrow-path-stremlining');


if (pricingFreeBtn) {
    pricingFreeBtn.addEventListener('mouseover', () => {
        // Change the d attribute to the new value when hovered
        arrowPathPrFree.setAttribute('d', newD);
    });
    pricingFreeBtn.addEventListener('mouseout', () => {
        // Revert the d attribute to the original value when not hovered
        arrowPathPrFree.setAttribute('d', originalD);
    });
}

if (pricingBasicBtn) {
    pricingBasicBtn.addEventListener('mouseover', () => {
        // Change the d attribute to the new value when hovered
        arrowPathPrBasic.setAttribute('d', newD);
    });
    pricingBasicBtn.addEventListener('mouseout', () => {
        // Revert the d attribute to the original value when not hovered
        arrowPathPrBasic.setAttribute('d', originalD);
    });
}

if (pricingGrowthBtn) {
    pricingGrowthBtn.addEventListener('mouseover', () => {
        // Change the d attribute to the new value when hovered
        arrowPathPrGrowth.setAttribute('d', newD);
    });
    pricingGrowthBtn.addEventListener('mouseout', () => {
        // Revert the d attribute to the original value when not hovered
        arrowPathPrGrowth.setAttribute('d', originalD);
    });
}


if (tryFreeBtnStremlinig) {
    tryFreeBtnStremlinig.addEventListener('mouseover', () => {
        // Change the d attribute to the new value when hovered
        arrowPathStremlining.setAttribute('d', newD);
    });
    tryFreeBtnStremlinig.addEventListener('mouseout', () => {
        // Revert the d attribute to the original value when not hovered
        arrowPathStremlining.setAttribute('d', originalD);
    });
}




const toggleBtn = document.getElementById('pricing-toggle-btn');
if (toggleBtn) {
    toggleBtn.addEventListener('change', () => {
        const offerLabel = document.getElementById('pricing-save')
        const annuallyPayLabel = document.getElementById('annually-label');
        const montlyPayLabel = document.getElementById('monthly-label');

        if (toggleBtn.value == "on") {
            toggleBtn.value = "";
            // console.log("montly");
            document.getElementById('basic-price').textContent = "1099";
            document.getElementById('growth-price').textContent = "3099";

            montlyPayLabel.classList.add('pricing-lable-active');
            annuallyPayLabel.classList.remove('pricing-lable-active');
            offerLabel.classList.remove('pricing-save-active');
        } else {
            toggleBtn.value = "on";
            // console.log("annually");
            document.getElementById('basic-price').textContent = "999";
            document.getElementById('growth-price').textContent = "2999";

            offerLabel.classList.add('pricing-save-active');
            annuallyPayLabel.classList.add('pricing-lable-active');
            montlyPayLabel.classList.remove('pricing-lable-active');
        }
    })
}

// contact page
const contact_sbmt_btn = document.querySelector('.contact-btn');
const contact_btn_arr_path = document.querySelector('#arrow-path-contact-submit');

if (contact_sbmt_btn) {
    // Define the original and new d attribute values
    const originalD_contact_btn = 'M21 7L1 7M21 7L15.0511 1M21 7L15.0511 13';
    const newD_contact_btn = 'M28 7L1 7M28 7L21.0511 1M28 7L21.0511 13';

    contact_sbmt_btn.addEventListener('mouseover', () => {
        // Change the d attribute to the new value when hovered
        contact_btn_arr_path.setAttribute('d', newD_contact_btn);
    });
    contact_sbmt_btn.addEventListener('mouseout', () => {
        // Revert the d attribute to the original value when not hovered
        contact_btn_arr_path.setAttribute('d', originalD_contact_btn);
    });
}

// side bar
function openSideBar() {
    const sideBar = document.getElementById('side-menu-bar');
    sideBar.classList.add('opacity-100', 'h-full');
}

function closeSideBar() {
    const sideBar = document.getElementById('side-menu-bar');
    sideBar.classList.remove('opacity-100', 'h-full');
}



// features page
const featuresNavbar = document.getElementById('features-hr-scroll');
const featuresBody = document.getElementById('features');
const allFeatures = document.querySelectorAll('.features-sec');
const featuresNavLinks = document.querySelectorAll('#features-hr-scroll a');
const featuresNavContainer = document.getElementById('featuresNav');

console.log(featuresNavContainer.offsetLeft);

if (featuresNavbar) {
    window.onscroll = function () { toggleNav() };

    var sticky = featuresBody.offsetTop - 20;

    function toggleNav() {
        if (window.pageYOffset >= sticky) {
            featuresNavbar.classList.add("hr-scroll-sticky");

            allFeatures.forEach(feature => {
                let top = window.scrollY;
                let leftX = window.scrollY
                let offset = feature.offsetTop;
                // let height = feature.offsetHeight;
                let id = feature.getAttribute('id');

                if (top >= offset - 200) {
                    featuresNavLinks.forEach(featureLink => {
                        featureLink.classList.remove('hr-scroll-acitve');
                    })
                    const specificFeature = featuresNavContainer.querySelector(`a[href="#${id}"]`);
                    specificFeature.classList.add('hr-scroll-acitve');

                    const scrollPostion = specificFeature.getBoundingClientRect();

                    // The rect object contains the element's position and size relative to the viewport
                    // console.log('Top:', scrollPostion.top);  
                    console.log("Left X : ", leftX)      // Top position of the element relative to the viewport
                    console.log('Left:', scrollPostion.left);      // Left position of the element relative to the viewport
                    // console.log('Bottom:', scrollPostion.bottom);  // Bottom position of the element relative to the viewport
                    console.log('Right:', scrollPostion.right);    // Right position of the element relative to the viewport
                    console.log('Width:', scrollPostion.width);    // Width of the element
                    console.log('featuresNavContainer.clientWidth:', featuresNavContainer.clientWidth);  // Height of the element
                    console.log('featuresNavContainer.offsetLeft:', featuresNavContainer.offsetLeft);  // Height of the element
                    console.log('featuresNavContainer.offsetWidth:', featuresNavContainer.offsetWidth);  // Height of the element
                    console.log('scrollPostion.left - featuresNavbar.clientWidth:',featuresNavbar.clientWidth - scrollPostion.left +  scrollPostion.width);  // Height of the element

                    // You can use scrollPostion.left to get the left position (x-axis) of the element
                    // const elementPositionX = scrollPostion.left;
                    // if (scrollPostion.left > featuresNavbar.clientWidth - 540) {
                        // featuresNavContainer.scrollTo({
                        //     // left: ,
                        //     behavior: 'smooth'
                        // }); 
                    // } 

                    // if(scrollPostion.left < 0){
                    //     featuresNavContainer.scrollTo({
                    //         left: featuresNavContainer.offsetLeft,
                    //         behavior: 'smooth'
                    //     });
                    // }

                    // if (scrollPostion.left < featuresNavbar.clientWidth - 540) {
                    //     featuresNavContainer.scrollTo({
                    //         left: featuresNavContainer.offsetLeft,
                    //         behavior: 'smooth'
                    //     });
                    // } 
                    // if(scrollPostion.left < featuresNavbar.scrollWidth) {
                    //     featuresNavContainer.scrollTo({
                    //         left: featuresNavContainer.offsetLeft,
                    //         behavior: 'smooth'
                    //     });
                    // }
                    // else {
                    //     featuresNavContainer.scrollTo({
                    //         left: 0,
                    //         behavior: 'smooth'
                    //     });
                    // }
                    // else if (scrollPostion.left > 700) {
                    //     featuresNavContainer.scrollTo({
                    //         left: 700,
                    //         behavior: 'smooth'
                    //     });
                    // } else if (scrollPostion.left > 400) {
                    //     featuresNavContainer.scrollTo({
                    //         left: 400,
                    //         behavior: 'smooth'
                    //     });
                    // } else if (scrollPostion.left < 400) {
                    //     featuresNavContainer.scrollTo({
                    //         left: 0,
                    //         behavior: 'smooth'
                    //     });
                    // }
                    // if (scrollPostion.left < -44.1875) {
                    //     featuresNavContainer.scrollTo({
                    //         left: 0,
                    //         behavior: 'smooth'
                    //     });
                    // }

                    // console.log('The x-axis position of the element is:', elementPositionX);

                }
            })

        } else {
            featuresNavbar.classList.remove("hr-scroll-sticky");
        }


    }
}
document.addEventListener('DOMContentLoaded', () => {
    const featuresNav = document.getElementById('featuresNav');
    const navLinks = featuresNav.querySelectorAll('a');
    const sections = Array.from(document.querySelectorAll('.features-sec'));
    let lastCall = 0;
    let scrollAnimation;
  
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset + window.innerHeight / 2;
      const currentSectionIndex = sections.findIndex(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        return scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight;
      });
  
      navLinks.forEach(link => link.classList.remove('hr-scroll-active'));
  
      if (currentSectionIndex !== -1) {
        const activeLink = navLinks[currentSectionIndex];
        activeLink.classList.add('hr-scroll-active');
  
        const navWidth = featuresNav.offsetWidth;
        const linkWidth = activeLink.offsetWidth;
        const targetScrollLeft = activeLink.offsetLeft - navWidth / 2 + linkWidth / 2;
  
        if (scrollAnimation) cancelAnimationFrame(scrollAnimation);
        const startScrollLeft = featuresNav.scrollLeft;
  
        scrollAnimation = requestAnimationFrame(function animate(time) {
          const progress = Math.min(time / 200, 1); // Adjust the duration (200ms) as needed
          featuresNav.scrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) * progress;
          if (progress < 1) scrollAnimation = requestAnimationFrame(animate);
        });
      }
    };
  
    const throttle = (fn, delay) => (...args) => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        fn(...args);
        lastCall = now;
      }
    };
  
    window.addEventListener('scroll', throttle(handleScroll, 100));
  });

// document.addEventListener('DOMContentLoaded', function() {
//     const featuresNav = document.getElementById('featuresNav');
//     const navLinks = featuresNav.querySelectorAll('a');
//     const sections = Array.from(document.querySelectorAll('.features-sec'));
  
//     // Function to handle scrolling
//     function handleScroll() {
//       const scrollPosition = window.pageYOffset + window.innerHeight / 2;
//       const currentSectionIndex = sections.findIndex(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;
//         return scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight;
//       });
  
//       // Remove the active class from all links
//       navLinks.forEach(link => link.classList.remove('hr-scroll-active'));
  
//       // Add the active class to the corresponding link
//       if (currentSectionIndex !== -1) {
//         const activeLink = navLinks[currentSectionIndex];
//         activeLink.classList.add('hr-scroll-active');
  
//         // Center the active link in the navigation bar
//         const navWidth = featuresNav.offsetWidth;
//         const linkWidth = activeLink.offsetWidth;
//         featuresNav.scrollLeft = activeLink.offsetLeft - navWidth / 2 + linkWidth / 2;
//       }
//     }
  
//     // Throttle function to limit scroll event handling
//     function throttle(fn, delay) {
//       let lastCall = 0;
//       return function (...args) {
//         const now = Date.now();
//         if (now - lastCall >= delay) {
//           fn.apply(this, args);
//           lastCall = now;
//         }
//       };
//     }
  
//     // Use a throttled scroll event handler
//     window.addEventListener('scroll', throttle(handleScroll, 100));
//   });

// document.addEventListener('DOMContentLoaded', function() {
//     const featuresNav = document.getElementById('featuresNav');
//     const navLinks = featuresNav.querySelectorAll('a');
//     const sections = document.querySelectorAll('.features-sec');
    
//     // Function to handle scrolling
//     function handleScroll() {
//         let currentSectionIndex = 0;

//         // Determine which section is in view
//         sections.forEach((section, index) => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.offsetHeight;
//             const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust the scroll position for the center

//             if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//                 currentSectionIndex = index;
//             }
//         });

//         // Get the corresponding navigation link
//         const activeLink = navLinks[currentSectionIndex];

//         // Remove the active class from all links and add it to the active link
//         navLinks.forEach(link => link.classList.remove('hr-scroll-active'));
//         activeLink.classList.add('hr-scroll-active');

//         // Center the active link in the navigation bar
//         // Here we use scrollLeft and make sure to use 'smooth' behavior for smoother scrolling.
//         featuresNav.scroll({
//             left: activeLink.offsetLeft - featuresNav.offsetWidth / 2 + activeLink.offsetWidth / 2,
//             behavior: 'smooth'
//         });
//     }

//     // Debounce function to avoid excessive scroll event handling
//     function debounce(fn, delay) {
//         let timeoutId;
//         return function (...args) {
//             clearTimeout(timeoutId);
//             timeoutId = setTimeout(() => fn.apply(this, args), delay);
//         };
//     }

//     // Use a debounced scroll event handler
//     window.addEventListener('scroll', debounce(handleScroll, 5));
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const featuresNav = document.getElementById('featuresNav');
//     const navLinks = featuresNav.querySelectorAll('a');
//     const sections = document.querySelectorAll('.features-sec');
    
//     // Add event listener for window scroll
//     window.addEventListener('scroll', function() {
//         let currentSectionIndex = 0;
        
//         // Loop through sections to determine which one is in view
//         sections.forEach((section, index) => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.offsetHeight;
//             const scrollPosition = window.scrollY;
            
//             if (scrollPosition >= sectionTop - sectionHeight / 2) {
//                 currentSectionIndex = index;
//             }
//         });
        
//         // Get the corresponding navigation link
//         const activeLink = navLinks[currentSectionIndex];
        
//         // Set the active class on the navigation link
//         navLinks.forEach(link => link.classList.remove('hr-scroll-active'));
//         activeLink.classList.add('hr-scroll-active');
        
//         // Scroll the navigation bar so the active link is in view
//         featuresNav.scrollLeft = activeLink.offsetLeft - featuresNav.offsetWidth / 2 + activeLink.offsetWidth / 2;
//     });
// });
