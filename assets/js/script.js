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
            counter('basic-price', 999, 1099, 10);
            counter('growth-price', 2999, 3099, 200);
            montlyPayLabel.classList.add('pricing-lable-active');
            annuallyPayLabel.classList.remove('pricing-lable-active');
            offerLabel.classList.remove('pricing-save-active');
        } else {
            toggleBtn.value = "on";
            counter('basic-price', 1099, 999, 10);
            counter('growth-price', 3099, 2999, 200);   

            offerLabel.classList.add('pricing-save-active');
            annuallyPayLabel.classList.add('pricing-lable-active');
            montlyPayLabel.classList.remove('pricing-lable-active');
        }
    })

    // counter function for pricing page, from start price to end price give a counter transition
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = 0.2, //Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
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
const featuresNavLinksHero = document.querySelectorAll('#featuresLinks a');
const featuresNavContainer = document.getElementById('featuresNav');

let scriptScrolling = false;
// console.log(featuresNavContainer.offsetLeft);
if (featuresNavbar) {
    window.addEventListener('scroll', toggleNav)
    
    var sticky = featuresBody.offsetTop - 100;
    var bt_non_sticky = featuresBody.offsetHeight + featuresBody.offsetTop;
    var runningSlider = document.getElementById('nav-slider');

    function toggleNav() {
        if (window.scrollY >= sticky) {

            featuresNavbar.classList.add("hr-scroll-sticky");
            if (window.scrollY >= bt_non_sticky) {
                // console.log("Removing sticky at bt_non_sticky: ", bt_non_sticky, " window.scrollY: ", window.scrollY)
                featuresNavbar.classList.remove("hr-scroll-sticky");
            }


            allFeatures.forEach(feature => {
                let top = window.scrollY;
                let offset = feature.offsetTop;
                let id = feature.getAttribute('id');

                // running
                if (top >= offset - 200) {
                    const specificFeature = featuresNavContainer.querySelector(`a[href="#${id}"]`);
                    // console.log("Width: ",specificFeature.offsetWidth);
                    // console.log("left: ",specificFeature.offsetLeft);
                    runningSlider.style.left = specificFeature.offsetLeft + "px";
                    runningSlider.style.width = specificFeature.offsetWidth + 'px';
                    // console.log("runningSlider.style.left: #",runningSlider.offsetLeft);
                    // console.log("runningSlider.style.width: #",runningSlider.style.width);
                    // console.log("hr-scroll-acitve: #",id);
                }
            })
            if (!scriptScrolling) {
                window.addEventListener('scroll', throttle(handleScroll, 200));
                // console.log("Attached event listener: for scroll ")
            }
        } else {
            featuresNavbar.classList.remove("hr-scroll-sticky");
        }



    }

    // Get all the sections and convert the NodeList to an array
    const sections = Array.from(allFeatures);
    let lastCall = 0;  // Variable to track the last time the throttle function was called
    let scrollAnimation;  // Variable to hold the reference to the animation frame

    // Function to handle window scrolling
    function handleScroll() {
        // Calculate the current scroll position, adjusting for the center of the screen
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        // console.log("window.scrollY: ", window.scrollY);
        // console.log("scrollPosition: ", scrollPosition);

        // Find the index of the section currently in view
        const currentSectionIndex = sections.findIndex(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            // console.log("sectionTop: ", sectionTop);
            // console.log("sectionHeight: ", sectionTop);
            return scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight;
        });
        // console.log("currentSectionIndex: ", currentSectionIndex);

        // If a section is in view, update the active navigation link and scroll the navigation bar
        if (currentSectionIndex > 0) { // -1) {
            const activeLink = featuresNavLinks[currentSectionIndex];
            const navWidth = featuresNavContainer.offsetWidth;
            const linkWidth = activeLink.offsetWidth;
            const targetScrollLeft = activeLink.offsetLeft - navWidth / 2 + linkWidth / 2;

            const acitveLinkRight = activeLink.offsetLeft + linkWidth;
            const activeLinkLeft = activeLink.offsetLeft;

            if (scrollAnimation) cancelAnimationFrame(scrollAnimation);
            const startScrollLeft = featuresNavContainer.scrollLeft;

            // Animate the scrolling to center the active link in the navigation bar
            scrollAnimation = requestAnimationFrame(function animate(time) {
                if (!scriptScrolling) {
                    // featuresNavContainer.scrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) * progress;
                    if (acitveLinkRight > navWidth) {
                        featuresNavContainer.scrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) // * progress; //featuresNavContainer.scrollLeft + linkWidth;
                        // console.log(" ++ acitveLinkRight + 50 > navWidth : ", acitveLinkRight + 50 > navWidth);
                    }
                    else if (activeLinkLeft < (navWidth / 2) + 180) {
                        featuresNavContainer.scrollLeft = 0;
                    }
                }
            });
        }
    };

    // Throttle function limits the frequency of the handleScroll function
    function throttle(callback, delay) {
        return () => {
            const now = Date.now();

            // Check if enough time has passed since the last call
            if (now - lastCall >= delay) {
                callback();
                // Update the lastCall timestamp to the current time
                lastCall = now;
            }
        };
    };

    featuresNavLinks.forEach(link => {
        link.addEventListener('click', event => {
            window.removeEventListener(scroll, throttle(handleScroll, 1000))
            scrollNavBarOnClickOnNavLink(link)
        });
    });

    featuresNavLinksHero.forEach(link => {
        link.addEventListener('click', event => {
            window.removeEventListener(scroll, throttle(handleScroll, 1000))
            scrollNavBarOnClickOnNavLink(link)
        });
    });

    async function scrollNavBarOnClickOnNavLink(linkElement) {
        const targetId = linkElement.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.removeEventListener(scroll, throttle(handleScroll, 1000))
        scriptScrolling = true;

        targetElement.scrollIntoView()

        var timer = null;
        window.addEventListener('scroll', function () {
            if (timer !== null) {
                clearTimeout(timer);
            }
            timer = setTimeout(function () {
                // do something
                scriptScrolling = false;
                window.addEventListener('scroll', throttle(handleScroll, 1000));
                handleScroll();
                console.log("Attached event listener: for scroll ")
            }, 300);
        }, false);
    }


    // Type writing Effect on hero section
    const sentences = [
        "smoothly",
        "quickly",
        "securely."
    ];

    let sentenceIndex = 0;
    let charIndex = 0;
    let deleting = false; // Flag to track whether we're deleting text
    const typingSpeed = 150; // Speed of typing out a sentence
    const deletingSpeed = 100; // Speed of deleting a sentence
    const textElement = document.getElementById("text-typewriting");

    function typeWriter() {
        if (deleting) {
            if (textElement.textContent.length > 0) {
                textElement.textContent = textElement.textContent.slice(0, -1);
                setTimeout(typeWriter, deletingSpeed);
            } else {
                deleting = false;
                sentenceIndex++;
                if (sentenceIndex >= sentences.length) {
                    sentenceIndex = 0;
                }
                charIndex = 0;
                typeWriter();
            }
        } else {
            if (charIndex < sentences[sentenceIndex].length) {
                textElement.textContent += sentences[sentenceIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                setTimeout(() => {
                    deleting = true;
                    typeWriter();
                }, 1000);
            }
        }
    }
    typeWriter();
}

// fbfbfc8f  fbfbfc7a