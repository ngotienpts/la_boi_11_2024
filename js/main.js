document.addEventListener("DOMContentLoaded", function () {
    // Tập hợp tất cả các phần tử cần sử dụng
    const backTop = document.querySelector("#back-top");

    // xử lý sự kiện chuyển tab
    function handleChangeTab () {
        const changTabs = document.querySelectorAll('.js__changeTab')

        if (changTabs.length === 0) return;

        changTabs.forEach((changTab)=>{
            const tabs = changTab.querySelectorAll(".js__tabItem");
            const panes = changTab.querySelectorAll(".js__tabPane");

            tabs.forEach((tab,index)=>{
                tab.onclick = function() {
                    pane = panes[index]

                    changTab.querySelector('.js__tabItem.active').classList.remove('active')
                    changTab.querySelector('.js__tabPane.active').classList.remove('active')

                    this.classList.add('active')
                    pane.classList.add('active')
                }
            })
        })
    }

    // Xử lý video tỉ lệ 16:9
     function handleVideo_16x9() {
        const video169s = document.querySelectorAll(".js__video169");
        if (video169s.length === 0) return;
        video169s.forEach((video169) => {
            var videos = video169.querySelectorAll("iframe");
            if (videos.length === 0) return;
            videos.forEach((video) => {
                var w = video.offsetWidth;
                video.style.height = (w * 9) / 16 + "px";
            });
        });
    }

    // xử lý sự kiện collapse
    function handleCollapse () {

        const collapseContainers = document.querySelectorAll('.js__collapseContainer')
        if (collapseContainers.length === 0) return;
        
        let activeItem = null;
        
        collapseContainers.forEach((collapseContainer)=>{
            const collapses = collapseContainer.querySelector('.js__collapse')
            collapses.onclick = function() {
                // khi item đang mở
                if (activeItem === collapseContainer) {
                    collapseContainer.classList.remove('active'); 
                    activeItem = null; 
                } else {
                    // khi không có item nào mở
                    if (activeItem) {
                        activeItem.classList.remove('active');
                    }
                    collapseContainer.classList.add('active');
                    activeItem = collapseContainer; 
                    
                }  
                 
            }
           
        })
    }

    // xử lý sự kiện active
    function handleActiveElement() {
        const activeContainers = document.querySelectorAll('.js__activeContainer')
        if (activeContainers.length === 0) return;
        
        
        activeContainers.forEach((activeContainer)=>{
            
            const activeElements = activeContainer.querySelectorAll('.js__activeItem')
            
            if (activeElements.length === 0) return;

            activeElements.forEach((activeElement)=>{

                activeElement.onclick = function() {
                    activeContainer.querySelector('.js__activeItem.active').classList.remove('active')
                    this.classList.add('active');
                }
            })
           
        })
    }

    // xử lý sự kiện tăng giảm số lượng sản phẩm
    function handleIncremental() {
        const incrementals = document.querySelectorAll('.js__incremental')
        if (incrementals.length === 0) return;

        incrementals.forEach((incremental)=>{
            let deincrement = incremental.querySelector(".js__deincrement");
            let increment = incremental.querySelector(".js__increment");
            let number = incremental.querySelector(".js__numberValue");

            
            let step = 1;
            let max = 100;
            let min = 0;
            let valueInput = 0;
            
            function updateValue(newValue) {
                valueInput = newValue;
                console.log("Current value:", valueInput);
            }
            
            number.oninput = function () {
                number.value = number.value > max ? max : number.value < min ? min : number.value;
                updateValue(number.value);
            };
            
            increment.addEventListener("click", () => {
                if (parseInt(number.value) + step >= max) {
                    number.value = max;
                } else {
                    number.value = parseInt(number.value) + step;
                }
                updateValue(number.value);
            });
            
            deincrement.addEventListener("click", () => {
                if (parseInt(number.value) - step <= min) {
                    number.value = min;
                } else {
                    number.value = parseInt(number.value) - step;
                }
                updateValue(number.value);
            });

        })

    }


    // Khởi tạo slider với một item
    function initSliderOneItems() {
        const oneSlides = document.querySelectorAll(".js__oneSlidesContainer");
        if (oneSlides) {
            oneSlides.forEach((item) => {
                var slider = item.querySelector(".js__oneSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");

                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                });
            });
        }
    }

    // khởi tạo slider với 3 item
    function initSliderThreeItems() {
        const threeSlides = document.querySelectorAll(".js__threeSlidesContainer");
        if (threeSlides) {
            threeSlides.forEach((item) => {
                var slider = item.querySelector(".js__threeSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 2,
                    spaceBetween: 15,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        }
                    },
                });
            });
        }
    }
    // khởi tạo slider với 4 item
    function initSliderFourItems() {
        const fourSlides = document.querySelectorAll(".js__fourSlidesContainer");
        if (fourSlides) {
            fourSlides.forEach((item) => {
                var slider = item.querySelector(".js__fourSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 2,
                    spaceBetween: 15,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        }
                    },
                });
            });
        }
    }
    // khởi tạo slider với 5 item
    function initSliderFiveItems() {
        const fiveSlides = document.querySelectorAll(".js__fiveSlidesContainer");
        if (fiveSlides) {
            fiveSlides.forEach((item) => {
                var slider = item.querySelector(".js__fiveSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                    breakpoints: {
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 5,
                        }
                    },
                });
            });
        }
    }

    // khởi tạo slider gallery picture
    function initSliderGalleryPictureItems() {
        const gallerryPictures = document.querySelectorAll(
            ".js__swiperGalleryContainerPicture"
        );
        gallerryPictures.forEach((item) => {
            var sliderLarge = item.querySelector(".js__swiperGalleryLarge");
            var sliderSmall = item.querySelector(".js__swiperGallerySmall");
            var next = item.querySelector(".swiper-button-next");
            var prev = item.querySelector(".swiper-button-prev");

            var small = new Swiper(sliderSmall, {
                spaceBetween: 15,
                slidesPerView: 4,
                slidesPerGroup: 1,
                freeMode: true,
                watchSlidesProgress: true,
                breakpoints: {
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                },
            });
            var large = new Swiper(sliderLarge, {
                spaceBetween: 10,
                slidesPerView: 1,
                slidesPerGroup: 1,
                navigation: {
                    nextEl: next || null,
                    prevEl: prev || null,
                },
                thumbs: {
                    swiper: small,
                },
            });

        });
    }
    

    // xử lý sự kiện show menu desk
    function handleMenuDesk () {
        const menuItems = document.querySelectorAll('.js__menuItem');
        const dropdownItems = document.querySelectorAll('.js__dropdownItem');

        if (menuItems.length === 0  && dropdownItems.length === 0) return;
        let activeItem = null;
        
        menuItems.forEach((menuItem)=>{
            const showMenuItem = menuItem.querySelector('.js__showMenuContainer');

            if(!showMenuItem) return
            
            showMenuItem.onclick = function() {
                // khi item đang mở
                if (activeItem === menuItem) {
                    menuItem.classList.remove('show'); 
                    activeItem = null; 
                } else {
                    // khi không có item nào mở
                    if (activeItem) {
                        activeItem.classList.remove('show');
                    }
                    menuItem.classList.add('show');
                    activeItem = menuItem; 
                    
                }  
                
            }

        });

        dropdownItems.forEach((dropdownItem)=>{
            const showDropdownItem = dropdownItem.querySelector('.js__showDropdown');
            
            showDropdownItem.onclick = function() {
                dropdownItem.classList.toggle('active')
                
            }
            
        });
        
        
    }

    // xử lý sự kiện show menu mobile
    function handleMenuMobile () {
        // show menu
        const bod = document.querySelector('body')
        const clickShowMenuMbs = document.querySelectorAll('.js__clickShowMenuMb');
        const closeSubMenuMb = document.querySelector('.js__closeSubMenuMb');
        const subMenuMb = document.querySelector('.js__subMenuMb');

        if(clickShowMenuMbs.length === 0 && !closeSubMenuMb) return;
        clickShowMenuMbs.forEach((clickShowMenuMb)=>{
            clickShowMenuMb.onclick = function() {
                subMenuMb.classList.add('active');
                bod.classList.add('hidden')
            }
        })
        closeSubMenuMb.onclick = function(){
            subMenuMb.classList.remove('active');
            bod.classList.remove('hidden')
        }

        const subMenuMbContainers = document.querySelectorAll('.js__subMenuMbContainer');

        if (subMenuMbContainers.length === 0 ) return;
        
        subMenuMbContainers.forEach((subMenuMbContainer)=>{

            const subMenuMbItems = subMenuMbContainer.querySelectorAll('.js__subMenuMbItem');
            const subMenuMbDropdowns = subMenuMbContainer.querySelectorAll('.js__subMenuMbDropdown');
            
            if (subMenuMbItems.length === 0 ) return;
            
            subMenuMbItems.forEach((subMenuMbItem)=>{
                const showSubMenuMbItem = subMenuMbItem.querySelector('.js__showSubMenuMbItem');
                
                if(!showSubMenuMbItem) return

                showSubMenuMbItem.onclick = function() {
                    subMenuMbItem.classList.toggle('active')
                }
            });

            if (subMenuMbDropdowns.length === 0 ) return;

            subMenuMbDropdowns.forEach((subMenuMbDropdown)=>{
                const showSubMenuMbDropdown = subMenuMbDropdown.querySelector('.js__showSubMenuMbDropdown');
                
                if(!showSubMenuMbDropdown) return

                showSubMenuMbDropdown.onclick = function() {
                    subMenuMbDropdown.classList.toggle('active')
                }
            });

            

        });

    }

    // xử lý sự kiện show search desk
    function handleShowSearchDesk () {
        const searchDesk = document.querySelectorAll('.js__searchDesk');

        if (!searchDesk) return;
        
        const searchIconDesk = document.querySelector('.js__searchIconDesk');
        const searchContentDesk = document.querySelector('.js__searchContentDesk');
        const searchInputDesk = document.querySelector('.js__searchInputDesk');

        searchIconDesk.onclick = function() {
            if(searchContentDesk.classList.contains('active')){
                searchContentDesk.classList.remove('active');
                searchInputDesk.value = '';
            }else {
                searchContentDesk.classList.add('active');
                searchInputDesk.focus();
            }
        }
         
        
    }

    // xử lý sự kiện để show popup
    function handleShowPopup() {
        const popupContainers = document.querySelectorAll(".js__popupContainer");
        
        if(popupContainers.length === 0) return 
        
        popupContainers.forEach((popupContainer)=>{
            
            const showPopup = popupContainer.querySelector(".js__showPopup");
            const popupContent = popupContainer.querySelector(".js__popupContent");
            const closePopup = popupContainer.querySelector(".js__closePopup");
            const overlay = popupContainer.querySelector(".js__overlay");
            
            showPopup.onclick = function() {
                popupContent.classList.add('active')
                overlay.classList.add('active')
                document.querySelector("body").style.overflow = "hidden";
            }
    
            closePopup.onclick = function () {
                document.querySelector("body").style.overflow = "auto";
                popupContent.classList.remove('active')
                overlay.classList.remove('active')
            };
    
            overlay.onclick = function () {
                this.classList.remove("active");
                document.querySelector("body").style.overflow = "auto";
                popupContent.classList.remove('active');
            };

            })

    }
    // xử lý sự kiện để show option product
    function handleShowOptionProduct() {
        const filterItems = document.querySelectorAll(".js__filterItem");
        
        if(filterItems.length === 0) return 
        
        filterItems.forEach((filterItem)=>{
            
            const showFilterOption = filterItem.querySelector(".js__filterItemHeading");
            
            showFilterOption.onclick = function() {
                filterItem.classList.toggle('active')
            }
    
            })

    }

    // xử lý customer select
    function handleCustomerSelect() {
        var x, i, j, l, ll, selElmnt, a, b, c;
        x = document.getElementsByClassName("js__customSelect");
        l = x.length;
        for (i = 0; i < l; i++) {
          selElmnt = x[i].getElementsByTagName("select")[0];
          ll = selElmnt.length;
          a = document.createElement("DIV");
          a.setAttribute("class", "select-selected");
          a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
          x[i].appendChild(a);
          b = document.createElement("DIV");
          b.setAttribute("class", "select-items select-hide");
          for (j = 1; j < ll; j++) {
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                  if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                      y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                  }
                }
                h.click();
            });
            b.appendChild(c);
          }
          x[i].appendChild(b);
          a.addEventListener("click", function(e) {
              e.stopPropagation();
              closeAllSelect(this);
              this.nextSibling.classList.toggle("select-hide");
              this.classList.toggle("select-arrow-active");
            });
        }
        function closeAllSelect(elmnt) {
          var x, y, i, xl, yl, arrNo = [];
          x = document.getElementsByClassName("select-items");
          y = document.getElementsByClassName("select-selected");
          xl = x.length;
          yl = y.length;
          for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
              arrNo.push(i)
              
            } else {
              y[i].classList.remove("select-arrow-active");
            }
          }
          for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
              x[i].classList.add("select-hide");
            }
          }
        }
        
        document.addEventListener("click", closeAllSelect);

    }

    // Khởi tạo fancybox
    function initFancybox() {
        const fancyboxes = document.querySelectorAll(".fancybox-full");
        if (fancyboxes) {
            fancyboxes.forEach(function () {
                $(".fancybox-full a").fancybox();
            });
        }
    }

    // Xử lý thanh header dính
    function handleStickyHeader() {
        const stickyHeaderPC = document.querySelector(".js__stickyHeader");
        if (stickyHeaderPC) {
            const isSticky = scrollY > 300;
            stickyHeaderPC.classList.toggle("sticky", isSticky);
        }
    }

    // Xử lý sự kiện khi nhấn nút "back to top"
    function handleBackTop() {
    
        if (!backTop) return;

        backTop.onclick = function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };

    }

    // Xử lý hiển thị nút backTop dựa trên vị trí cuộn trang
    function handleBackTopVisibility() {
        if (backTop) {
            if (
                document.body.scrollTop > 300 ||
                document.documentElement.scrollTop > 300
            ) {
                backTop.style.opacity = 1;
                backTop.style.visibility = "visible";
            } else {
                backTop.style.opacity = 0;
                backTop.style.visibility = "hidden";
            }
        }
    }

    // Xử lý sự kiện khi cuộn trang
    function handleWindowScroll() {
        handleStickyHeader();
        handleBackTopVisibility()
    }

    // Khởi tạo tất cả các chức năng
    function initApp() {
        handleShowSearchDesk();
        handleMenuDesk();
        handleMenuMobile();
        // slide
        initSliderOneItems();
        initSliderThreeItems();
        initSliderFourItems();
        initSliderFiveItems();
        initSliderGalleryPictureItems();
        // end slide
        handleBackTop();
        initFancybox();
        handleShowPopup();
        handleShowOptionProduct();
        handleCustomerSelect();
        handleCollapse();
        handleChangeTab();
        handleActiveElement();
        handleIncremental();
        // handleVideo_16x9();
        window.addEventListener('scroll',handleWindowScroll);
        window.addEventListener('resize',handleWindowScroll);
    }

    // Bắt đầu khởi tạo ứng dụng
    initApp();
});