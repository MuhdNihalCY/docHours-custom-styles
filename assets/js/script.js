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

    window.addEventListener('scroll', toggleNav)
    //    window.onscroll = function () { toggleNav() };

    var sticky = featuresBody.offsetTop - 100;
    var bt_non_sticky = featuresBody.offsetHeight + featuresBody.offsetTop;

    function toggleNav() {
        if (window.pageYOffset >= sticky) {
            featuresNavbar.classList.add("hr-scroll-sticky");
            if (window.pageYOffset >= bt_non_sticky) {
                featuresNavbar.classList.remove("hr-scroll-sticky");
            }


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
                   // handleScroll()
                }
            })
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
        const scrollPosition = window.pageYOffset + window.innerHeight / 2;
        // console.log("window.pageYOffset: ", window.pageYOffset);
        // console.log("scrollPosition: ", scrollPosition);

        // Find the index of the section currently in view
        const currentSectionIndex = sections.findIndex(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            // console.log("sectionTop: ", sectionTop);
            // console.log("sectionHeight: ", sectionTop);

            return scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight;
        });
        console.log("currentSectionIndex: ", currentSectionIndex);


        // If a section is in view, update the active navigation link and scroll the navigation bar
        if (currentSectionIndex > 0) { // -1) {
            const activeLink = featuresNavLinks[currentSectionIndex];
            // Add 'hr-scroll-active' class to the active link
            // activeLink.classList.add('hr-scroll-active');

            // Calculate the target scroll position in the navigation bar to center the active link
            const navWidth = featuresNavContainer.offsetWidth;
            const linkWidth = activeLink.offsetWidth;
            const targetScrollLeft = activeLink.offsetLeft - navWidth / 2 + linkWidth / 2;

            const acitveLinkRight = activeLink.offsetLeft + linkWidth;
            const activeLinkLeft = activeLink.offsetLeft;



            console.log("activeLink.offsetLeft ; ", activeLink.offsetLeft)
            console.log(" navWidth ; ", navWidth)
            console.log(" linkWidth ; ", linkWidth)
            console.log("activeLink.offsetLeft - navWidth / 2 + linkWidth / 2; ", activeLink.offsetLeft - navWidth / 2 + linkWidth / 2)

            // Cancel any existing animation frame

            if (scrollAnimation) cancelAnimationFrame(scrollAnimation);
            const startScrollLeft = featuresNavContainer.scrollLeft;


            // Animate the scrolling to center the active link in the navigation bar
            scrollAnimation = requestAnimationFrame(function animate(time) {
                // Calculate the progress of the animation
            //    const progress = Math.min(time / 200, 1);
                // Update the scroll position of the navigation bar
                // console.log("scrollAnimation: ", scrollAnimation);
              //  console.log("progress: ", progress);
                console.log("targetScrollLeft: ", targetScrollLeft)
                console.log(" First- startScrollLeft: ", startScrollLeft);
                console.log(" targetScrollLeft - startScrollLeft : ", targetScrollLeft - startScrollLeft);

                // featuresNavContainer.scrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) * progress;
                if (acitveLinkRight -60  > navWidth) {
                    featuresNavContainer.scrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) // * progress; //featuresNavContainer.scrollLeft + linkWidth;
                    console.log(" ++ acitveLinkRight + 50 > navWidth : ", acitveLinkRight + 50 > navWidth);
                }
                else if (activeLinkLeft  < (navWidth / 2) + 180) {
                    featuresNavContainer.scrollLeft = 0;
                    //startScrollLeft + (targetScrollLeft - startScrollLeft) * progress;

                    console.log(" -- activeLinkLeft + 50 < navWidth /2 : ", activeLinkLeft + 50 < navWidth / 2);
                    console.log(" -- activeLinkLeft + 50 : ", activeLinkLeft + 50);
                    console.log(" --  navWidth/2 : ", navWidth / 2);
                    console.log(" -- acitveLinkRight + 50 < navWidth : ", acitveLinkRight + 50 < navWidth);

                }
                // if (acitveLinkRight + 50 > navWidth /2   ) { // && acitveLinkRight + 50 < navWidth / 2
                //     featuresNavContainer.scrollLeft = activeLinkLeft - 200;
                //     console.log(" -- acitveLinkRight + 50 < navWidth : ", acitveLinkRight + 50 < navWidth);
                // }

                //  featuresNavContainer.scrollLeft = 

                console.log(" second- startScrollLeft: ", featuresNavContainer.scrollLeft);
                // If the animation is not complete, request the next animation frame
             //   if (progress < 1) scrollAnimation = requestAnimationFrame(animate);

                // console.log("scrollAnimation: ",animate)
                // cancelAnimationFrame(animate);
                // console.log("scrollAnimation: ",animate)
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

    // Add a throttled scroll event listener to the window
    window.addEventListener('scroll', throttle(handleScroll, 3000));
    //    window.addEventListener('scroll', handleScroll);



    featuresNavLinks.forEach(link => {
        link.addEventListener('click', event => {
            //  event.preventDefault(); // Prevent default navigation
            console.log("Testing");
            scrollNavBarOnClickOnNavLink(link)
        });
    });

    function scrollNavBarOnClickOnNavLink(linkElement) {
        const targetId = linkElement.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        // featuresNavLinks.scrollLeft = linkElement.offsetLeft;

        targetElement.scrollIntoView();
        // window.scrollTo({
        //     top: targetElement.offsetTop

        // })
        scroll(0, targetElement.offsetTop);
        console.log(`targetID: ${targetId}, targetElement: ${targetElement.offsetTop}, featuresNavLinks.scrollLeft: ${featuresNavLinks.scrollLeft}`);
        console.log("element: ", targetElement);

    }


    // nav link making to custom behaviour
    // featuresNavLinks.forEach(link => {
    //     link.addEventListener('click', scrollNavBarOnClickOnNavLink(link));
    // });
    // event => {
    //   //  event.preventDefault(); // Prevent default navigation to control it manually

    //     // Get the target element
    //     const targetId = link.getAttribute('href');
    //     const targetElement = document.querySelector(targetId);

    //     featuresNavLinks.scrollLeft = link.offsetLeft;
    //     // if (targetElement) {
    //     //     // Calculate target scroll position for the navigation bar
    //     //     const targetScrollLeft = targetElement.offsetLeft - (featuresNavContainer.clientWidth / 2) + (targetElement.clientWidth / 2);

    //     //     // If there's an ongoing animation, cancel it
    //     //     if (scrollAnimation) {
    //     //         cancelAnimationFrame(scrollAnimation);
    //     //     }

    //     //     // Animate the navigation bar scroll
    //     //     animateScroll(targetScrollLeft, 300); // Adjust duration as needed

    //     //     // Use a timeout to delay the default behavior, allowing animation to finish
    //     //     setTimeout(() => {
    //     //         // Scroll to the target element (vertical scrolling)
    //     //         targetElement.scrollIntoView({ behavior: 'smooth' });
    //     //     }, 300); // Adjust the delay to match the animation duration
    //     // }
    // }






    // Type writing Effect on hero section
    // Array of sentences to display
    const sentences = [
        "smoothly",
        "quickly",
        "securely."
    ];

    // Variables to track the current sentence and character index
    let sentenceIndex = 0;
    let charIndex = 0;
    let deleting = false; // Flag to track whether we're deleting text

    // Typing and deleting speeds in milliseconds
    const typingSpeed = 150; // Speed of typing out a sentence
    const deletingSpeed = 100; // Speed of deleting a sentence

    // Get the text element where the typewriter effect will appear
    const textElement = document.getElementById("text");

    // Function to type out or delete a sentence
    function typeWriter() {
        // If we're deleting text
        if (deleting) {
            // If there is still text to delete
            if (textElement.textContent.length > 0) {
                // Remove the last character from the text element
                textElement.textContent = textElement.textContent.slice(0, -1);
                // Continue deleting with a delay
                setTimeout(typeWriter, deletingSpeed);
            } else {
                // Once the current sentence is fully deleted, start typing the next sentence
                deleting = false;
                // Move to the next sentence
                sentenceIndex++;
                // Check if we've reached the end of the array
                if (sentenceIndex >= sentences.length) {
                    // Reset the sentence index to loop back to the first sentence
                    sentenceIndex = 0;
                }
                // Reset the character index for the new sentence
                charIndex = 0;
                // Start typing the next sentence
                typeWriter();
            }
        } else {
            // If we're typing text
            // If the current sentence is not fully typed out
            if (charIndex < sentences[sentenceIndex].length) {
                // Add the next character to the text element
                textElement.textContent += sentences[sentenceIndex].charAt(charIndex);
                // Increment the character index
                charIndex++;
                // Continue typing with a delay
                setTimeout(typeWriter, typingSpeed);
            } else {
                // When the sentence is fully typed out
                // Wait for a bit before starting to delete the sentence
                setTimeout(() => {
                    // Set the deleting flag to true
                    deleting = true;
                    // Start deleting the text
                    typeWriter();
                }, 1000); // Delay before deleting the current sentence (2 seconds)
            }
        }
    }

    // Start the typewriter effect
    typeWriter();


}

