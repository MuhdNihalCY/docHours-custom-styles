// side bar
function openSideBar() {
    const sideBar = document.getElementById('side-menu-bar');
    sideBar.classList.add('opacity-100', 'h-full');
}

function closeSideBar() {
    const sideBar = document.getElementById('side-menu-bar');
    sideBar.classList.remove('opacity-100', 'h-full');
}

// Define the original and new d attribute values of the Arrows SVG from the Buttons
const originalD = 'M21 7L1 7M21 7L15.0511 1M21 7L15.0511 13';
const newD = 'M25 7L1 7M25 7L19.0511 1M25 7L19.0511 13';

// home page
const tryButton = document.querySelector('.try-free-btn-1');
const tryButton_2 = document.querySelector('.try-free-btn-2');
const pathElement = document.querySelector('#arrow-path');
const pathElement_2 = document.querySelector('#arrow-path-bt');

// Add event listeners to the button
if (tryButton) {
    tryButton.addEventListener('mouseover', () => {
        pathElement.setAttribute('d', newD);
    });
    tryButton.addEventListener('mouseout', () => {
        pathElement.setAttribute('d', originalD);
    });
}
if (tryButton_2) {
    tryButton_2.addEventListener('mouseover', () => {
        pathElement_2.setAttribute('d', newD);
    });
    tryButton_2.addEventListener('mouseout', () => {
        pathElement_2.setAttribute('d', originalD);
    });
}

// pricing page
const pricingFreeBtn = document.querySelector('.free-plan-btn');
const pricingBasicBtn = document.querySelector('.basic-plan-btn');
const pricingGrowthBtn = document.querySelector('.growth-plan-btn');
const arrowPathPrFree = document.querySelector('#arrow-path-pr-free');
const arrowPathPrBasic = document.querySelector('#arrow-path-pr-basic');
const arrowPathPrGrowth = document.querySelector('#arrow-path-pr-growth');
const arrowPathStremlining = document.querySelector('#arrow-path-stremlining');
const tryFreeBtnStremlinig = document.querySelector('.try-free-btn-stremlinig');

if (pricingFreeBtn) {
    pricingFreeBtn.addEventListener('mouseover', () => {
        arrowPathPrFree.setAttribute('d', newD); // change to path
    });
    pricingFreeBtn.addEventListener('mouseout', () => {
        arrowPathPrFree.setAttribute('d', originalD);
    });
}
if (pricingBasicBtn) {
    pricingBasicBtn.addEventListener('mouseover', () => {
        arrowPathPrBasic.setAttribute('d', newD);
    });
    pricingBasicBtn.addEventListener('mouseout', () => {
        arrowPathPrBasic.setAttribute('d', originalD);
    });
}
if (pricingGrowthBtn) {
    pricingGrowthBtn.addEventListener('mouseover', () => {
        arrowPathPrGrowth.setAttribute('d', newD);
    });
    pricingGrowthBtn.addEventListener('mouseout', () => {
        arrowPathPrGrowth.setAttribute('d', originalD);
    });
}
if (tryFreeBtnStremlinig) {
    tryFreeBtnStremlinig.addEventListener('mouseover', () => {
        arrowPathStremlining.setAttribute('d', newD);
    });
    tryFreeBtnStremlinig.addEventListener('mouseout', () => {
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
            counter('basic-price', 999, 1099, 200);
            counter('growth-price', 2999, 3099, 200);
            montlyPayLabel.classList.add('pricing-lable-active');
            annuallyPayLabel.classList.remove('pricing-lable-active');
            offerLabel.classList.remove('pricing-save-active');
        } else {
            toggleBtn.value = "on";
            counter('basic-price', 1099, 999, 200);
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
            step = Math.abs(Math.floor(duration / range)),
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
        contact_btn_arr_path.setAttribute('d', newD_contact_btn);
    });
    contact_sbmt_btn.addEventListener('mouseout', () => {
        contact_btn_arr_path.setAttribute('d', originalD_contact_btn);
    });
}

// features page
const featuresNavbar = document.getElementById('features-hr-scroll');
const featuresBody = document.getElementById('features');
const allFeatures = document.querySelectorAll('.features-sec');
const featuresNavLinks = document.querySelectorAll('#features-hr-scroll a');
const featuresNavLinksHero = document.querySelectorAll('#featuresLinks a');
const featuresNavContainer = document.getElementById('featuresNav');
let scriptScrolling = false; // variable to control the scroll event actions
if (featuresNavbar) {
    window.addEventListener('scroll', toggleNav)
    var sticky = featuresBody.offsetTop - 100;
    var bt_non_sticky = featuresBody.offsetHeight + featuresBody.offsetTop;
    var runningSlider = document.getElementById('nav-slider');

    function toggleNav() {
        if (window.scrollY >= sticky) {
            featuresNavbar.classList.add("hr-scroll-sticky"); // make features navbar sticky.
            if (window.scrollY >= bt_non_sticky) {
                featuresNavbar.classList.remove("hr-scroll-sticky"); // remove sticky
            }
            allFeatures.forEach(feature => {
                let top = window.scrollY;
                let offset = feature.offsetTop;
                let id = feature.getAttribute('id');
                // running slider below features navbar.
                if (top >= offset - 200) {
                    const specificFeature = featuresNavContainer.querySelector(`a[href="#${id}"]`);
                    runningSlider.style.left = specificFeature.offsetLeft + "px";
                    runningSlider.style.width = specificFeature.offsetWidth + 'px';
                }
            })
            if (!scriptScrolling) {
                window.addEventListener('scroll', throttle(handleScroll, 200)); // re-attach scroll event 
            }
        } else {
            featuresNavbar.classList.remove("hr-scroll-sticky");
        }
    }

    // Get all the sections and convert the NodeList to an array
    const sections = Array.from(allFeatures);
    let lastCall = 0; // Variable to track the last time the throttle function was called
    let scrollAnimation; // Variable to hold the reference to the animation frame
    // Function to handle window scrolling
    function handleScroll() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;   // Calculate the current scroll position, adjusting for the center of the screen
        const currentSectionIndex = sections.findIndex(section => {  // Find the index of the section currently in view
            return scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight;
        });

        // If a section is in view, update the active navigation link and scroll the navigation bar
        if (currentSectionIndex > 0) {
            const activeLink = featuresNavLinks[currentSectionIndex];
            const navWidth = featuresNavContainer.offsetWidth;
            const linkWidth = activeLink.offsetWidth;
            const targetScrollLeft = activeLink.offsetLeft - navWidth / 2 + linkWidth / 2;
            const acitveLinkRight = activeLink.offsetLeft + linkWidth;
            const activeLinkLeft = activeLink.offsetLeft;

            // if (scrollAnimation) cancelAnimationFrame(scrollAnimation);
            const startScrollLeft = featuresNavContainer.scrollLeft;
            // scrollAnimation = requestAnimationFrame(function animate(time) {
            if (!scriptScrolling) {
                if (acitveLinkRight > navWidth) {
                    featuresNavContainer.scrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft)
                } else if (activeLinkLeft < (navWidth / 2) + 180) {
                    featuresNavContainer.scrollLeft = 0;
                }
            }
            // });
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

    // remove event listener from navbar
    featuresNavLinks.forEach(link => {
        link.addEventListener('click', event => {
            window.removeEventListener(scroll, throttle(handleScroll, 1000))
            scrollNavBarOnClickOnNavLink(link)
        });
    });
    // remove event listener from hero section navigation
    featuresNavLinksHero.forEach(link => {
        link.addEventListener('click', event => {
            window.removeEventListener(scroll, throttle(handleScroll, 1000))
            scrollNavBarOnClickOnNavLink(link)
        });
    });
    function scrollNavBarOnClickOnNavLink(linkElement) {
        const targetId = linkElement.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        scriptScrolling = true;
        targetElement.scrollIntoView() // mannually scrolling to target section.
        var timer = null;
        window.addEventListener('scroll', function () {
            if (timer !== null) {
                clearTimeout(timer);
            }
            timer = setTimeout(function () {
                scriptScrolling = false;
                handleScroll();
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
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const textElement = document.getElementById("text-typewriting");
    const textElement_second = document.getElementById("text-typewriting-second");


    function typeWriter() {
        // alert(""); 
        if (deleting) {
            if (textElement.textContent.length > 0) {
                textElement.textContent = textElement.textContent.slice(0, -1);
                textElement_second.textContent = textElement_second.textContent.slice(0, -1);
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
                textElement_second.textContent += sentences[sentenceIndex].charAt(charIndex);
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

// function featureBrandingImgMouseIn() {
//     var featureBrandingImgDiv = document.getElementById('featureBrandingImgDiv');
//     featureBrandingImgDiv.classList.add('feature-branding-move-left');
// }

// function featureBrandingImgMouseLeave() {
//     var featureBrandingImgDiv = document.getElementById('featureBrandingImgDiv');
//     featureBrandingImgDiv.classList.remove('feature-branding-move-left');
// }