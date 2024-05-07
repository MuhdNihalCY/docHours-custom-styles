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
                let offset = feature.offsetTop;
                let id = feature.getAttribute('id');

                if (top >= offset - 200) {
                    featuresNavLinks.forEach(featureLink => {
                        featureLink.classList.remove('hr-scroll-acitve');
                    })
                    const specificFeature = featuresNavContainer.querySelector(`a[href="#${id}"]`);
                    specificFeature.classList.add('hr-scroll-acitve');
                }
            })
        } else {
            featuresNavbar.classList.remove("hr-scroll-sticky");
        }
    }

    // Get the navigation bar element and its links
    const featuresNav = document.getElementById('featuresNav');
    const navLinks = featuresNav.querySelectorAll('a');
    // Get all the sections and convert the NodeList to an array
    const sections = Array.from(document.querySelectorAll('.features-sec'));
    let lastCall = 0;  // Variable to track the last time the throttle function was called
    let scrollAnimation;  // Variable to hold the reference to the animation frame

    // Function to handle window scrolling
    const handleScroll = () => {
        // Calculate the current scroll position, adjusting for the center of the screen
        const scrollPosition = window.pageYOffset + window.innerHeight / 2;
        console.log("window.pageYOffset: ", window.pageYOffset);
        console.log("scrollPosition: ", scrollPosition);

        // Find the index of the section currently in view
        const currentSectionIndex = sections.findIndex(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            console.log("sectionTop: ", sectionTop);
            console.log("sectionHeight: ", sectionTop);

            return scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight;
        });
        console.log("currentSectionIndex: ", currentSectionIndex);


        // If a section is in view, update the active navigation link and scroll the navigation bar
        if (currentSectionIndex > 0) { // -1) {
            const activeLink = navLinks[currentSectionIndex];
            // Add 'hr-scroll-active' class to the active link
            // activeLink.classList.add('hr-scroll-active');

            // Calculate the target scroll position in the navigation bar to center the active link
            const navWidth = featuresNav.offsetWidth;
            const linkWidth = activeLink.offsetWidth;
            const targetScrollLeft = activeLink.offsetLeft - navWidth / 2 + linkWidth / 2;

            // Cancel any existing animation frame
            if (scrollAnimation) cancelAnimationFrame(scrollAnimation);
            const startScrollLeft = featuresNav.scrollLeft;

            // Animate the scrolling to center the active link in the navigation bar
            scrollAnimation = requestAnimationFrame(function animate(time) {
                // Calculate the progress of the animation
                const progress = Math.min(time / 200, 1);
                // Update the scroll position of the navigation bar
                featuresNav.scrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) * progress;
                // If the animation is not complete, request the next animation frame
                if (progress < 1) scrollAnimation = requestAnimationFrame(animate);
            });
        }
    };

    // Throttle function limits the frequency of the handleScroll function
    const throttle = (fn, delay) => (...args) => {
        const now = Date.now();
        if (now - lastCall >= delay) {
            fn(...args);
            lastCall = now;
        }
    };

    // Add a throttled scroll event listener to the window
    window.addEventListener('scroll', throttle(handleScroll, 300));

    // Function to handle click events on navigation links
    const handleLinkClick = (event) => {
        // Prevent the default link behavior (jumping to the section)
        event.preventDefault();
        // Scroll smoothly to the target section
        const targetSection = document.querySelector(event.currentTarget.hash);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });
}