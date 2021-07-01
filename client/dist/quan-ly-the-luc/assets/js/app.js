/* ------------------------------------------------------------------------------
 *
 *  # Template JS core
 *
 *  Includes minimum required JS code for proper template functioning
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var App = function () {


    //
    // Setup module components
    //

    // Transitions
    // -------------------------

    // Disable all transitions
    var _transitionsDisabled = function () {
        $('body').addClass('no-transitions');
    };

    // Enable all transitions
    var _transitionsEnabled = function () {
        $('body').removeClass('no-transitions');
    };

    const IDRandom = function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    // Sidebars
    // -------------------------

    //
    // On desktop
    //

    // Resize main sidebar
    var _sidebarMainResize = function () {

        // Flip 2nd level if menu overflows
        // bottom edge of browser window
        var revertBottomMenus = function () {
            $('.sidebar-main').find('.nav-sidebar').children('.nav-item-submenu').hover(function () {
                var totalHeight = 0,
                    $this = $(this),
                    navSubmenuClass = 'nav-group-sub',
                    navSubmenuReversedClass = 'nav-item-submenu-reversed';

                totalHeight += $this.find('.' + navSubmenuClass).filter(':visible').outerHeight();
                if ($this.children('.' + navSubmenuClass).length) {
                    if (($this.children('.' + navSubmenuClass).offset().top + $this.find('.' + navSubmenuClass).filter(':visible').outerHeight()) > document.body.clientHeight) {
                        $this.addClass(navSubmenuReversedClass)
                    }
                    else {
                        $this.removeClass(navSubmenuReversedClass)
                    }
                }
            });
        }

        // If sidebar is resized by default
        if ($('body').hasClass('sidebar-xs')) {
            revertBottomMenus();
        }

        // Toggle min sidebar class
        $('.sidebar-main-toggle').on('click', function (e) {
            e.preventDefault();

            $('body').toggleClass('sidebar-xs').removeClass('sidebar-mobile-main');
            revertBottomMenus();
        });
    };

    // Toggle main sidebar
    var _sidebarMainToggle = function () {
        $(document).on('click', '.sidebar-main-hide', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-main-hidden');
        });
    };

    // Toggle secondary sidebar
    var _sidebarSecondaryToggle = function () {
        $(document).on('click', '.sidebar-secondary-toggle', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-secondary-hidden');
        });
    };


    // Show right, resize main
    var _sidebarRightMainToggle = function () {
        $(document).on('click', '.sidebar-right-main-toggle', function (e) {
            e.preventDefault();

            // Right sidebar visibility
            $('body').toggleClass('sidebar-right-visible');

            // If visible
            if ($('body').hasClass('sidebar-right-visible')) {

                // Make main sidebar mini
                $('body').addClass('sidebar-xs');

                // Hide children lists if they are opened, since sliding animation adds inline CSS
                $('.sidebar-main .nav-sidebar').children('.nav-item').children('.nav-group-sub').css('display', '');
            }
            else {
                $('body').removeClass('sidebar-xs');
            }
        });
    };

    // Show right, hide main
    var _sidebarRightMainHide = function () {
        $(document).on('click', '.sidebar-right-main-hide', function (e) {
            e.preventDefault();

            // Opposite sidebar visibility
            $('body').toggleClass('sidebar-right-visible');

            // If visible
            if ($('body').hasClass('sidebar-right-visible')) {
                $('body').addClass('sidebar-main-hidden');
            }
            else {
                $('body').removeClass('sidebar-main-hidden');
            }
        });
    };

    // Toggle right sidebar
    var _sidebarRightToggle = function () {
        $(document).on('click', '.sidebar-right-toggle', function (e) {
            e.preventDefault();

            $('body').toggleClass('sidebar-right-visible');
        });
    };

    // Show right, hide secondary
    var _sidebarRightSecondaryToggle = function () {
        $(document).on('click', '.sidebar-right-secondary-toggle', function (e) {
            e.preventDefault();

            // Opposite sidebar visibility
            $('body').toggleClass('sidebar-right-visible');

            // If visible
            if ($('body').hasClass('sidebar-right-visible')) {
                $('body').addClass('sidebar-secondary-hidden');
            }
            else {
                $('body').removeClass('sidebar-secondary-hidden');
            }
        });
    };


    // Toggle content sidebar
    var _sidebarComponentToggle = function () {
        $(document).on('click', '.sidebar-component-toggle', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-component-hidden');
        });
    };


    //
    // On mobile
    //

    // Expand sidebar to full screen on mobile
    var _sidebarMobileFullscreen = function () {
        $('.sidebar-mobile-expand').on('click', function (e) {
            e.preventDefault();
            var $sidebar = $(this).parents('.sidebar'),
                sidebarFullscreenClass = 'sidebar-fullscreen'

            if (!$sidebar.hasClass(sidebarFullscreenClass)) {
                $sidebar.addClass(sidebarFullscreenClass);
            }
            else {
                $sidebar.removeClass(sidebarFullscreenClass);
            }
        });
    };

    // Toggle main sidebar on mobile
    var _sidebarMobileMainToggle = function () {
        $('.sidebar-mobile-main-toggle').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-mobile-main').removeClass('sidebar-mobile-secondary sidebar-mobile-right');

            if ($('.sidebar-main').hasClass('sidebar-fullscreen')) {
                $('.sidebar-main').removeClass('sidebar-fullscreen');
            }
        });
    };

    // Toggle secondary sidebar on mobile
    var _sidebarMobileSecondaryToggle = function () {
        $('.sidebar-mobile-secondary-toggle').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-mobile-secondary').removeClass('sidebar-mobile-main sidebar-mobile-right');

            // Fullscreen mode
            if ($('.sidebar-secondary').hasClass('sidebar-fullscreen')) {
                $('.sidebar-secondary').removeClass('sidebar-fullscreen');
            }
        });
    };

    // Toggle right sidebar on mobile
    var _sidebarMobileRightToggle = function () {
        $('.sidebar-mobile-right-toggle').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-mobile-right').removeClass('sidebar-mobile-main sidebar-mobile-secondary');

            // Hide sidebar if in fullscreen mode on mobile
            if ($('.sidebar-right').hasClass('sidebar-fullscreen')) {
                $('.sidebar-right').removeClass('sidebar-fullscreen');
            }
        });
    };

    // Toggle component sidebar on mobile
    var _sidebarMobileComponentToggle = function () {
        $('.sidebar-mobile-component-toggle').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-mobile-component');
        });
    };


    // Navigations
    // -------------------------

    // Sidebar navigation
    var _navigationSidebar = function () {

        // Define default class names and options
        var navClass = 'nav-sidebar',
            navItemClass = 'nav-item',
            navItemOpenClass = 'nav-item-open',
            navLinkClass = 'nav-link',
            navSubmenuClass = 'nav-group-sub',
            navSlidingSpeed = 250;

        // Configure collapsible functionality
        $('.' + navClass).each(function () {
            $(this).find('.' + navItemClass).has('.' + navSubmenuClass).children('.' + navItemClass + ' > ' + '.' + navLinkClass).not('.disabled').on('click', function (e) {
                e.preventDefault();

                // Simplify stuff
                var $target = $(this),
                    $navSidebarMini = $('.sidebar-xs').not('.sidebar-mobile-main').find('.sidebar-main .' + navClass).children('.' + navItemClass);

                // Collapsible
                if ($target.parent('.' + navItemClass).hasClass(navItemOpenClass)) {
                    $target.parent('.' + navItemClass).not($navSidebarMini).removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
                }
                else {
                    $target.parent('.' + navItemClass).not($navSidebarMini).addClass(navItemOpenClass).children('.' + navSubmenuClass).slideDown(navSlidingSpeed);
                }

                // Accordion
                if ($target.parents('.' + navClass).data('nav-type') == 'accordion') {
                    $target.parent('.' + navItemClass).not($navSidebarMini).siblings(':has(.' + navSubmenuClass + ')').removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
                }
            });
        });

        // Disable click in disabled navigation items
        $(document).on('click', '.' + navClass + ' .disabled', function (e) {
            e.preventDefault();
        });

        // Scrollspy navigation
        $('.nav-scrollspy').find('.' + navItemClass).has('.' + navSubmenuClass).children('.' + navItemClass + ' > ' + '.' + navLinkClass).off('click');
    };

    // Navbar navigation
    var _navigationNavbar = function () {

        // Prevent dropdown from closing on click
        $(document).on('click', '.dropdown-content', function (e) {
            e.stopPropagation();
        });

        // Disabled links
        $('.navbar-nav .disabled a, .nav-item-levels .disabled').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
        });

        // Show tabs inside dropdowns
        $('.dropdown-content a[data-toggle="tab"]').on('click', function (e) {
            $(this).tab('show');
        });
    };


    // Components
    // -------------------------

    // Tooltip
    var _componentTooltip = function () {

        // Initialize
        $('[data-popup="tooltip"]').tooltip();

        // Demo tooltips, remove in production
        var demoTooltipSelector = '[data-popup="tooltip-demo"]';
        if ($(demoTooltipSelector).is(':visible')) {
            $(demoTooltipSelector).tooltip('show');
            setTimeout(function () {
                $(demoTooltipSelector).tooltip('hide');
            }, 2000);
        }
    };

    // Popover
    var _componentPopover = function () {
        $('[data-popup="popover"]').popover();
    };

    var _componentSweetAlert = function () {
        var swalInit = swal.mixin({
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-primary',
            cancelButtonClass: 'btn btn-light'
        });

        $('.sweet_delete').on('click', function () {
            swalInit.fire({
                title: 'Xóa đơn vị?',
                text: "Bạn có chắc muốn xóa đơn vị này không?",
                type: 'warning',
                showCancelButton: true,

                cancelButtonText: 'Hủy',
                confirmButtonText: 'Xóa',


                confirmButtonClass: 'btn btn-danger',
                cancelButtonClass: 'btn btn-outline bg-slate-600 text-slate-600 border-slate-600 legitRipple',
                buttonsStyling: false,
            }).then(function (result) {
                if (result.value) {
                    swalInit.fire({
                        title: 'Đã xóa!',
                        text: 'Dữ liệu đã bị xóa',
                        type: 'success',
                        timer: 2000
                    }
                    );
                }
                else if (result.dismiss === swal.DismissReason.cancel) {
                    swalInit.fire(
                        {
                            title: 'Đã hủy bỏ',
                            type: 'error',
                            timer: 2000
                        }
                    );
                }
            });
        });

        // Bottom right
        $('.sweet_toast_bottom_right_update').on('click', function () {
            swalInit.fire({
                text: 'Cập nhật thành công',
                type: 'success',
                toast: true,
                showConfirmButton: false,
                position: 'bottom-right'
            });
        });

        // Bottom right
        $('.sweet_toast_bottom_right_create').on('click', function () {
            swalInit.fire({
                text: 'Thêm mới thành công',
                type: 'success',
                toast: true,
                showConfirmButton: false,
                position: 'bottom-right'
            });
        });

        $('.sweet_toast_bottom_right_delete').on('click', function () {
            swalInit.fire({
                text: 'Xóa thành công',
                type: 'danger',
                toast: true,
                showConfirmButton: false,
                position: 'bottom-right'
            });
        });
    }

    // var _componentSelect2Tree = function () {
    //     $('select').select2({
    //         maximumInputLength: 20 // only allow terms up to 20 characters long
    //     });

    // }

    // CSS3 animations
    var _componentAnimationCSS = function () {

        // Toggle animations
        $('body').on('click', '.animation', function (e) {

            // Get animation class from 'data' attribute
            var animation = $(this).data('animation');

            // Apply animation once per click
            $(this).parents('.card').addClass('animated ' + animation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this).removeClass('animated ' + animation);
            });
            e.preventDefault();
        });
    };

    var _componentPickadate = function () {
        // Single picker
        $('.date-single').pickadate({
            format: 'dd/mm/yyyy',
            formatSubmit: 'dd/mm/yyyy',
            selectYears: true,
            selectMonths: true
        });
    }

    var _componentMultiselect = function () {
        if (!$().multiselect) {
            console.warn('Warning - bootstrap-multiselect.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-multiselect').multiselect();
    };

    // Uniform
    var _componentUniform = function () {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Styled checkboxes, radios
        $('.form-input-styled').uniform({
            fileButtonClass: 'action btn bg-warning-400'
        });
    };

    var _componentFileUpload = function () {
        if (!$().fileinput) {
            console.warn('Warning - fileinput.min.js is not loaded.');
            return;
        }

        //
        // Define variables
        //

        // Modal template
        var modalTemplate = '<div class="modal-dialog modal-lg" role="document">\n' +
            '  <div class="modal-content">\n' +
            '    <div class="modal-header align-items-center">\n' +
            '      <h6 class="modal-title">{heading} <small><span class="kv-zoom-title"></span></small></h6>\n' +
            '      <div class="kv-zoom-actions btn-group">{toggleheader}{fullscreen}{borderless}{close}</div>\n' +
            '    </div>\n' +
            '    <div class="modal-body">\n' +
            '      <div class="floating-buttons btn-group"></div>\n' +
            '      <div class="kv-zoom-body file-zoom-content"></div>\n' + '{prev} {next}\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</div>\n';

        // Buttons inside zoom modal
        var previewZoomButtonClasses = {
            toggleheader: 'btn btn-light btn-icon btn-header-toggle btn-sm',
            fullscreen: 'btn btn-light btn-icon btn-sm',
            borderless: 'btn btn-light btn-icon btn-sm',
            close: 'btn btn-light btn-icon btn-sm'
        };

        // Icons inside zoom modal classes
        var previewZoomButtonIcons = {
            prev: '<i class="icon-arrow-left32"></i>',
            next: '<i class="icon-arrow-right32"></i>',
            toggleheader: '<i class="icon-menu-open"></i>',
            fullscreen: '<i class="icon-screen-full"></i>',
            borderless: '<i class="icon-alignment-unalign"></i>',
            close: '<i class="icon-cross2 font-size-base"></i>'
        };

        // File actions
        var fileActionSettings = {
            zoomClass: '',
            zoomIcon: '<i class="icon-zoomin3"></i>',

            dragClass: 'p-2',
            dragIcon: '<i class="icon-three-bars"></i>',

            removeLabel: 'Xóa',
            removeClass: 'btn btn-danger',

            uploadIcon: '<i class="icon-upload"></i>',
            removeErrorClass: 'text-danger',

            removeIcon: '<i class="icon-bin"></i>',
            indicatorNew: '<i class="icon-file-plus text-success"></i>',
            indicatorSuccess: '<i class="icon-checkmark3 file-icon-large text-success"></i>',
            indicatorError: '<i class="icon-cross2 text-danger"></i>',
            indicatorLoading: '<i class="icon-spinner2 spinner text-muted"></i>'
        };


        $('.file-input').fileinput({
            initialPreview: [],

            dragLabel: 'Kéo và thả file ở đây',

            browseLabel: 'Thêm',
            browseIcon: '<i class="icon-file-plus mr-2"></i>',

            uploadLabel: 'Tải lên',
            uploadClass: 'btn btn-success',
            uploadIcon: '<i class="icon-file-upload2 mr-2"></i>',

            removeLabel: 'Xóa',
            removeClass: 'btn btn-danger',
            removeIcon: '<i class="icon-cross2 font-size-base mr-2"></i>',
            layoutTemplates: {
                icon: '<i class="icon-file-check"></i>',
                modal: modalTemplate
            },
            initialCaption: "Không có file nào được chọn",
            previewZoomButtonClasses: previewZoomButtonClasses,
            previewZoomButtonIcons: previewZoomButtonIcons,
            fileActionSettings: fileActionSettings
        });


        $('.file-input-ajax').fileinput({
            browseLabel: 'Thêm',
            // uploadLabel: 'Tải lên',
            // removeLabel: 'Xóa',

            uploadClass: 'btn btn-success',
            removeClass: 'btn btn-danger',

            uploadUrl: "http://localhost:3000", // server upload action
            uploadAsync: true,
            maxFileCount: 5,
            initialPreview: [],
            browseIcon: '<i class="icon-file-plus mr-2"></i>',
            // uploadIcon: '<i class="icon-file-upload2 mr-2"></i>',
            // removeIcon: '<i class="icon-cross2 font-size-base mr-2"></i>',

            // allowedFileExtensions: ["jpg", "gif", "png", "txt"],

            fileActionSettings: {
                // removeIcon: '<i class="icon-bin"></i>',
                // removeClass: '',
                // uploadIcon: '<i class="icon-upload"></i>',
                // uploadClass: '',
                zoomIcon: '<i class="icon-zoomin3"></i>',
                zoomClass: '',
                indicatorNew: '<i class="icon-file-plus text-success"></i>',
                indicatorSuccess: '<i class="icon-checkmark3 file-icon-large text-success"></i>',
                indicatorError: '<i class="icon-cross2 text-danger"></i>',
                indicatorLoading: '<i class="icon-spinner2 spinner text-muted"></i>',
            },
            layoutTemplates: {
                icon: '<i class="icon-file-check"></i>',
                modal: modalTemplate,
            },
            initialCaption: 'Không có file nào được chọn',
            mainClass: 'input-group input-group-md',
            previewZoomButtonClasses: previewZoomButtonClasses,
            previewZoomButtonIcons: previewZoomButtonIcons
        });
    }

    var _componentDatatableBasic = function () {
        if (!$().DataTable) {
            console.warn('Warning - datatables.min.js is not loaded.');
            return;
        }

        // Setting datatable defaults
        $.extend($.fn.dataTable.defaults, {
            autoWidth: false,
            columnDefs: [{
                orderable: false,
                width: 100,
                targets: [5]
            }],
            dom: '<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>',
            language: {
                search: '<span>Filter:</span> _INPUT_',
                searchPlaceholder: 'Type to filter...',
                lengthMenu: '<span>Show:</span> _MENU_',
                paginate: { 'first': 'First', 'last': 'Last', 'next': $('html').attr('dir') == 'rtl' ? '&larr;' : '&rarr;', 'previous': $('html').attr('dir') == 'rtl' ? '&rarr;' : '&larr;' }
            }
        });

        // Basic datatable
        $('.datatable-basic').DataTable({
            dom: '<"datatable-scroll"t><"datatable-footer"ip>',
            columnDefs: [{
                autoWidth: false,
                orderable: false,
                // width: 150,
                targets: [0, 1, 2, 3, 4, 5, 6]
            }],
            language: {
                "processing": "Đang xử lý...",
                "lengthMenu": "Xem _MENU_ mục",
                "zeroRecords": "Không tìm thấy dòng nào phù hợp",
                "info": "Đang xem _START_ đến _END_ trong tổng số _TOTAL_ mục",
                "infoEmpty": "Đang xem 0 đến 0 trong tổng số 0 mục",
                "infoFiltered": "(được lọc từ _MAX_ mục)",
                "search": "Tìm:",
                "paginate": {
                    "first": "Đầu",
                    "previous": "Trước",
                    "next": "Tiếp",
                    "last": "Cuối"
                },
                "aria": {
                    "sortAscending": ": Sắp xếp thứ tự tăng dần",
                    "sortDescending": ": Sắp xếp thứ tự giảm dần"
                },
                "autoFill": {
                    "cancel": "Hủy",
                    "fill": "Điền tất cả ô với <i>%d<\/i>",
                    "fillHorizontal": "Điền theo hàng ngang",
                    "fillVertical": "Điền theo hàng dọc",
                    "info": "Mẫu thông tin tự động điền"
                },
                "buttons": {
                    "collection": "Chọn lọc <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
                    "colvis": "Hiển thị theo cột",
                    "colvisRestore": "Khôi phục hiển thị",
                    "copy": "Sao chép",
                    "copyKeys": "Nhấn Ctrl hoặc u2318 + C để sao chép bảng dữ liệu vào clipboard.<br \/><br \/>Để hủy, click vào thông báo này hoặc nhấn ESC",
                    "copySuccess": {
                        "1": "Đã sao chép 1 dòng dữ liệu vào clipboard",
                        "_": "Đã sao chép %d dòng vào clipboard"
                    },
                    "copyTitle": "Sao chép vào clipboard",
                    "csv": "File CSV",
                    "excel": "File Excel",
                    "pageLength": {
                        "-1": "Xem tất cả các dòng",
                        "1": "Hiển thị 1 dòng",
                        "_": "Hiển thị %d dòng"
                    },
                    "pdf": "File PDF",
                    "print": "In ấn"
                },
                "emptyTable": "Không có dữ liệu nào để hiển thị",
                // "infoPostFix": "Đang hiển thị dòng _START_ tới dòng _END_ trong tổng số _TOTAL_ mục",
                "infoThousands": "`",
                "loadingRecords": "Loading...",
                "select": {
                    "1": "%d dòng đang được chọn",
                    "_": "%d dòng đang được chọn",
                    "cells": {
                        "1": "1 ô đang được chọn",
                        "_": "%d ô đang được chọn"
                    },
                    "columns": {
                        "1": "1 cột đang được chọn",
                        "_": "%d cột đang được được chọn"
                    },
                    "rows": {
                        "1": "1 dòng đang được chọn",
                        "_": "%d dòng đang được chọn"
                    }
                },
                "thousands": "`",
                "searchBuilder": {
                    "title": {
                        "_": "Thiết lập tìm kiếm (%d)",
                        "0": "Thiết lập tìm kiếm"
                    },
                    "button": {
                        "0": "Thiết lập tìm kiếm",
                        "_": "Thiết lập tìm kiếm (%d)"
                    },
                    "value": "Giá trị",
                    "clearAll": "Xóa hết",
                    "condition": "Điều kiện",
                    "conditions": {
                        "date": {
                            "after": "Sau",
                            "before": "Trước",
                            "between": "Nằm giữa",
                            "empty": "Rỗng",
                            "equals": "Bằng với",
                            "not": "Không phải",
                            "notBetween": "Không nằm giữa",
                            "notEmpty": "Không rỗng"
                        },
                        "number": {
                            "between": "Nằm giữa",
                            "empty": "Rỗng",
                            "equals": "Bằng với",
                            "gt": "Lớn hơn",
                            "gte": "Lớn hơn hoặc bằng",
                            "lt": "Nhỏ hơn",
                            "lte": "Nhỏ hơn hoặc bằng",
                            "not": "Không phải",
                            "notBetween": "Không nằm giữa",
                            "notEmpty": "Không rỗng"
                        },
                        "string": {
                            "contains": "Chứa",
                            "empty": "Rỗng",
                            "endsWith": "Kết thúc bằng",
                            "equals": "Bằng",
                            "not": "Không phải",
                            "notEmpty": "Không rỗng",
                            "startsWith": "Bắt đầu với"
                        }
                    },
                    "logicAnd": "Và",
                    "logicOr": "Hoặc",
                    "add": "Thêm điều kiện",
                    "data": "Dữ liệu",
                    "deleteTitle": "Xóa quy tắc lọc"
                },
                "searchPanes": {
                    "countFiltered": "{shown} ({total})",
                    "emptyPanes": "Không có phần tìm kiếm",
                    "clearMessage": "Xóa hết",
                    "loadMessage": "Đang load phần tìm kiếm",
                    "collapse": {
                        "0": "Phần tìm kiếm",
                        "_": "Phần tìm kiếm (%d)"
                    },
                    "title": "Bộ lọc đang hoạt động - %d",
                    "count": "{total}"
                }
            }
        });

        // Alternative pagination
        $('.datatable-pagination').DataTable({
            pagingType: "simple",
            language: {
                paginate: { 'next': $('html').attr('dir') == 'rtl' ? 'Next &larr;' : 'Next &rarr;', 'previous': $('html').attr('dir') == 'rtl' ? '&rarr; Prev' : '&larr; Prev' }
            }
        });

        // Datatable with saving state
        $('.datatable-save-state').DataTable({
            stateSave: true,
            language: {
                search: false
            }
        });

        // Scrollable datatable
        var table = $('.datatable-scroll-y').DataTable({
            autoWidth: true,
            scrollY: 300
        });

        // Resize scrollable table when sidebar width changes
        $('.sidebar-control').on('click', function () {
            table.columns.adjust().draw();
        });
    };
    // Card actions
    // -------------------------

    var _componentRenderTable = function () {

    }
    // Reload card (uses BlockUI extension)
    var _cardActionReload = function () {
        $('.card [data-action=reload]:not(.disabled)').on('click', function (e) {
            e.preventDefault();
            var $target = $(this),
                block = $target.closest('.card');

            // Block card
            $(block).block({
                message: '<i class="icon-spinner2 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait',
                    'box-shadow': '0 0 0 1px #ddd'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });

            // For demo purposes
            window.setTimeout(function () {
                $(block).unblock();
            }, 2000);
        });
    };

    // Collapse card
    var _cardActionCollapse = function () {
        var $cardCollapsedClass = $('.card-collapsed');

        // Hide if collapsed by default
        $cardCollapsedClass.children('.card-header').nextAll().hide();

        // Rotate icon if collapsed by default
        $cardCollapsedClass.find('[data-action=collapse]').addClass('rotate-180');

        // Collapse on click
        $('.card [data-action=collapse]:not(.disabled)').on('click', function (e) {
            var $target = $(this),
                slidingSpeed = 150;

            e.preventDefault();
            $target.parents('.card').toggleClass('card-collapsed');
            $target.toggleClass('rotate-180');
            $target.closest('.card').children('.card-header').nextAll().slideToggle(slidingSpeed);
        });
    };

    // Remove card
    var _cardActionRemove = function () {
        $('.card [data-action=remove]').on('click', function (e) {
            e.preventDefault();
            var $target = $(this),
                slidingSpeed = 150;

            // If not disabled
            if (!$target.hasClass('disabled')) {
                $target.closest('.card').slideUp({
                    duration: slidingSpeed,
                    start: function () {
                        $target.addClass('d-block');
                    },
                    complete: function () {
                        $target.remove();
                    }
                });
            }
        });
    };

    // Card fullscreen mode
    var _cardActionFullscreen = function () {
        $('.card [data-action=fullscreen]').on('click', function (e) {
            e.preventDefault();

            // Define vars
            var $target = $(this),
                cardFullscreen = $target.closest('.card'),
                overflowHiddenClass = 'overflow-hidden',
                collapsedClass = 'collapsed-in-fullscreen',
                fullscreenAttr = 'data-fullscreen';

            // Toggle classes on card
            cardFullscreen.toggleClass('fixed-top h-100 rounded-0');

            // Configure
            if (!cardFullscreen.hasClass('fixed-top')) {
                $target.removeAttr(fullscreenAttr);
                cardFullscreen.children('.' + collapsedClass).removeClass('show');
                $('body').removeClass(overflowHiddenClass);
                $target.siblings('[data-action=move], [data-action=remove], [data-action=collapse]').removeClass('d-none');
            }
            else {
                $target.attr(fullscreenAttr, 'active');
                cardFullscreen.removeAttr('style').children('.collapse:not(.show)').addClass('show ' + collapsedClass);
                $('body').addClass(overflowHiddenClass);
                $target.siblings('[data-action=move], [data-action=remove], [data-action=collapse]').addClass('d-none');
            }
        });
    };


    // Misc
    // -------------------------

    // Dropdown submenus. Trigger on click
    var _dropdownSubmenu = function () {

        // All parent levels require .dropdown-toggle class
        $('.dropdown-menu').find('.dropdown-submenu').not('.disabled').find('.dropdown-toggle').on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();

            // Remove "show" class in all siblings
            $(this).parent().siblings().removeClass('show').find('.show').removeClass('show');

            // Toggle submenu
            $(this).parent().toggleClass('show').children('.dropdown-menu').toggleClass('show');

            // Hide all levels when parent dropdown is closed
            $(this).parents('.show').on('hidden.bs.dropdown', function (e) {
                $('.dropdown-submenu .show, .dropdown-submenu.show').removeClass('show');
            });
        });
    };

    // Header elements toggler
    var _headerElements = function () {

        // Toggle visible state of header elements
        $('.header-elements-toggle').on('click', function (e) {
            e.preventDefault();
            $(this).parents('[class*=header-elements-]').find('.header-elements').toggleClass('d-none');
        });

        // Toggle visible state of footer elements
        $('.footer-elements-toggle').on('click', function (e) {
            e.preventDefault();
            $(this).parents('.card-footer').find('.footer-elements').toggleClass('d-none');
        });
    };

    // Unit List page QuanLyDonVi/index
    var _componentRenderUnitList = function () {
        const unitList = document.querySelector('#unitList');
        if (unitList) {
            const DanhSachDonVi = [
                {
                    item: 'Binh chủng thông tin 1',
                    children: [
                        {
                            item: 'Thủ trưởng Bộ Tư Lệnh',
                            children: []
                        },
                        {
                            item: 'Trường Sĩ quan Thông tin',
                            children: [
                                {
                                    item: 'Ban khoa học Quân sự',
                                    children: []
                                },
                                {
                                    item: 'Tiểu đoàn 20',
                                    children: []
                                },
                                {
                                    item: 'Tiểu đoàn 30',
                                    children: [
                                        {
                                            item: 'Ban khoa học Quân sự',
                                            children: []
                                        },
                                        {
                                            item: 'Tiểu đoàn 20',
                                            children: []
                                        },
                                        {
                                            item: 'Tiểu đoàn 30',
                                            children: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            item: 'Thủ trưởng Bộ Tư Lệnh 2',
                            children: []
                        },
                    ]
                },
                {
                    item: 'Binh chủng thông tin 2',
                    children: []
                },
                {
                    item: 'Binh chủng thông tin 3',
                    children: []
                },
            ]

            const ROOT = document.getElementById('root')

            const renderChild = (arr, level) => {
                let result = '';
                arr.forEach((item, index) => {

                    result += `
                <div class="card-group-control  card-group-control-left ${item.children.length ? `` : 'card-hide'}">
    
                <div class="card">
                <div class="card-header header-elements-inline">
                <h6 class="card-title">
                    <a class="text-default ${item.children.length === 0 ? 'collapsed' : ''}" data-toggle="collapse" href="#accordion-control-group-${level}-${index}">${item.item}</a>
                </h6>
                <div class="header-elements">
                    <div class="list-icons">
                    <a href="./update.html" class="text-black text ml-2">
                        <i class="far fa-edit" data-popup="tooltip" title="Sửa"></i>
                    </a>
                    <a href="#" class="text-danger text ml-2">
                        <i class="far fa-trash-alt sweet_delete" data-popup="tooltip" title="Xóa"></i>
                    </a>
                    <a href="#" class="text-black text ml-2">
                        <i class="icon-users" data-popup="tooltip" title="DS Quân Nhân"></i>
                    </a>
                    </div>
                </div>
                </div>
    
                <div id="accordion-control-group-${level}-${index}" class="collapse show">
                    ${item.children ? renderChild(item.children, level + 1) : ''}
                </div>
            </div>
            </div>
            `
                })
                return `<div class="card-group-control-child">${result}</div>`;
            }


            const renderItem = (arr, level, itemParent) => {
                itemParent = ROOT;

                let result = '';
                arr.forEach((item, index) => {

                    result += `
                <div class="card-group-control  card-group-control-left ${item.children.length ? '' : 'card-hide'}">
                    <div class="card">
                        <div class="card-header header-elements-inline">
                        <h6 class="card-title">
                            <a class=" text-default ${item.children.length === 0 ? 'collapsed' : ''}" data-toggle="collapse"  href="#accordion-control-group-${level}-${index}">${item.item}</a>
                        </h6>
                        <div class="header-elements">
                            <div class="list-icons">
                            <a href="./update.html" class="text-black text ml-2">
                                <i class="far fa-edit" data-popup="tooltip" title="Sửa"></i>
                            </a>
                            <a href="#" class="text-danger text ml-2">
                                <i class="far fa-trash-alt sweet_delete" data-popup="tooltip" title="Xóa"></i>
                            </a>
                            <a href="#" class="text-black text ml-2">
                                <i class="icon-users" data-popup="tooltip" title="DS Quân Nhân"></i>
                            </a>
                            </div>
                        </div>
                        </div>
    
                        <div id="accordion-control-group-${level}-${index}" class="collapse ${item.children.length > 0 && 'show'}">
                            ${item.children ? renderChild(item.children, level + 1) : ''}
                        </div>
                    </div>
                </div>
            `
                })

                const divParent = document.createElement('div')
                divParent.insertAdjacentHTML('afterBegin', result)
                itemParent.appendChild(divParent)
            }

            renderItem(DanhSachDonVi, 0, ROOT)
        }
    }

    //Select2ToTree use "select" choose Unit Tree model
    // var _componentSel2ToTree = function () {
    //     var mydata = [
    //         {
    //             id: 1,
    //             text: "USA",
    //             inc: [
    //                 {
    //                     id: 111,
    //                     text: "California",
    //                     inc: [
    //                         {
    //                             id: 1111,
    //                             text: "Los Angeles",
    //                             inc: [
    //                                 { id: 11111, text: "Hollywood" }
    //                             ]
    //                         },
    //                         {
    //                             id: 1112,
    //                             text: "San Diego"
    //                         }
    //                     ]
    //                 },
    //                 { id: 112, text: "Oregon" }
    //             ]
    //         },
    //         { id: 2, text: "India" },
    //         { id: 3, text: "VietNam" }
    //     ];

    //     $(".sel_2").select2ToTree({ treeData: { dataArr: mydata }, maximumSelectionLength: 3 });
    //     $('.sel_2').on('select2:open', function (e) {
    //         console.log('select event');
    //         console.log(this)
    //         if ($(this).hasClass("select2-hidden-accessible")) {
    //             document.querySelectorAll('.select2-results__option').forEach(item => console.log(item))
    //             // $(".select2-results__option").addClass("showme");
    //         }
    //     });
    //     // $(".select2-results__option").addClass("opened");
    //     // $(".select2-results__option").addClass("showme");
    //     // End Select2
    // }

    //Render Object Modal Form show in page 'QuanLyThongTu/create" page (file in footer.html ) )
    // var _componentRenderObjectModal = function () {
    //     var dataItemsObject = [
    //         {
    //             id: IDRandom(),
    //             title: 'Chiến sĩ nghĩa vụ',
    //             gender: 'Nam',
    //             rangeAge: 'Dưới 36 tuổi'
    //         },
    //         {
    //             id: IDRandom(),
    //             title: 'Sĩ quản',
    //             gender: 'Nữ',
    //             rangeAge: 'Từ 36 tuổi đên 45 tuổi'
    //         }
    //     ]

    //     const rootListItem = document.querySelector('#listItemObject');

    //     //Convert data option after select value 'sth'
    //     //Now using mockData with value: '0', '1', '2'
    //     //BE need update real data
    //     const convertValueTitle = (value) => {
    //         switch (value) {
    //             case '0':
    //                 return 'Chiến sĩ nghĩa vụ'
    //             case '1':
    //                 return 'Học viên sĩ quan'
    //             case '2':
    //                 return 'Sĩ quan'
    //             case '3':
    //                 return 'QNCN'
    //             default:
    //                 return 'Chiến sĩ nghĩa vụ'
    //         }
    //     }

    //     //Render a card object with data get from select
    //     //FE is hardcode value: 'Giỏi', 'Đạt', 'Khá'. BE update help me , <3
    //     const renderItemObject = (data) => {
    //         let result = '';

    //         data.forEach((item, index) => {
    //             result += `
    //             <div class="card border-none boxShadow-none" >
    //                                 <div class="card-header bg-lightblue header-elements-inline border-none py-1 ">
    //                                     <h5 class="text-500 text-black mb-0">${convertValueTitle(item.title)}</h5>
    //                                     <div class="header-elements">
    //                                         <div class="list-icons text-black">
    //                                             <a id="${item.id}" class="text-danger btnDeleteItem sweet_toast_bottom_right_delete animation" data-animation="fadeOutLeft" data-popup="tooltip" title="Xóa"">
    //                                                 <i class="icon-trash"></i>
    //                                             </a>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    
    //                                 <div class="card-body pt-2 pb-0 px-0">
    //                                     <div class="form-group row align-items-center">
    //                                         <div class="col-lg-4">
    //                                             <div class="form-group row">
    //                                                 <label class="col-form-label col-lg-4 text-500 text-right py-1"">Giỏi</label>
    //                                                 <div class="col-lg-8">
    //                                                     <input type="text" class="form-control" placeholder="Nhập chỉ tiêu">
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    
    //                                         <div class="col-lg-4">
    //                                             <div class="form-group row">
    //                                                 <label class="col-form-label col-lg-4 text-500 text-right py-1"">Khá</label>
    //                                                 <div class="col-lg-8">
    //                                                     <input type="text" class="form-control" placeholder="Nhập chỉ tiêu">
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    
    //                                         <div class="col-lg-4">
    //                                             <div class="form-group row">
    //                                                 <label class="col-form-label col-lg-4 text-500 text-right py-1"">Đạt</label>
    //                                                 <div class="col-lg-8">
    //                                                     <input type="text" class="form-control" placeholder="Nhập chỉ tiêu">
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //             `;
    //         })

    //         rootListItem.innerHTML = result;
    //         const listBtnDelete = document.querySelectorAll('.btnDeleteItem');
    //         for (let index = 0; index < listBtnDelete.length; index++) {
    //             const element = listBtnDelete[index];
    //             element.onclick = function () {
    //                 const ID = element.id;
    //                 // element.classList.add('animated', 'fadeIn')
    //                 setTimeout(() => {
    //                     let newList = dataItemsObject.filter(item => item.id !== ID)
    //                     dataItemsObject = [...newList]
    //                     renderItemObject(dataItemsObject);
    //                 }, 500);

    //             }
    //         }
    //     }

    //     renderItemObject(dataItemsObject);

    //     //Update data and re-render Card Object Modal
    //     function getModalValue(data) {
    //         dataItemsObject.unshift(data)
    //         renderItemObject(dataItemsObject)
    //     }

    //     //After click "Thêm"  have id "addItem", get value from input, select
    //     document.getElementById("addItem").onclick = function () {
    //         const id = IDRandom();
    //         const title = document.getElementById("selectUnit").value
    //         const gender = document.getElementById("selectGender").value
    //         const age = document.getElementById("selectAge").value

    //         const data = { id: id, title: title, gender: gender, age: age }
    //         getModalValue(data)
    //     }
    // }

    //Render Standar Form show in page 'QuanLyThongTu/create"
    var _componentRenderStandar = function () {
        const standardPage = document.querySelector('#standardPage')

        if (standardPage) {

            //setup mockdata
            //BE need update real data here
            const listStandardMale = [
                {
                    id: IDRandom(),
                    title: 'Tố chất sức nhanh Male ',
                    children: []
                },
                {
                    id: IDRandom(),
                    title: 'Tố chất sức mạnh Male ',
                    children: []
                },
            ];

            const listStandardMaleUp = [];

            const listStandardFamale = [
                {
                    id: IDRandom(),
                    title: 'Tố chất sức nhanh',
                    children: []
                },
                {
                    id: IDRandom(),
                    title: 'Tố chất sức mạnh',
                    children: []
                },
            ];

            //setup mockdata for unit: giờ, phút, giây
            //BE need update here
            const listUnit = [
                {
                    id: 1,
                    valueU: '1',
                    nameU: 'Giờ '
                },
                {
                    id: 2,
                    valueU: '2',
                    nameU: 'Phút '
                },
                {
                    id: 3,
                    valueU: '3',
                    nameU: 'Giây '
                },
                {
                    id: 4,
                    valueU: '4',
                    nameU: 'Lần '
                },
                {
                    id: 5,
                    valueU: '5',
                    nameU: 'Cái '
                },
            ]

            const rootStandardMale = document.querySelector('#rootStandardMale')
            const rootStandardMaleUp = document.querySelector('#rootStandardMaleUp')
            const rootStandardFamale = document.querySelector('#rootStandardFamale')

            //Check arrayParent, rootGroupStandard from dataStandard (data-standard)
            function checkDataStandard(dataStandard) {
                switch (dataStandard) {
                    case 'male':
                        return { arrayParent: listStandardMale, rootGroupStandard: rootStandardMale }
                    case 'maleUp':
                        return { arrayParent: listStandardMaleUp, rootGroupStandard: rootStandardMaleUp }

                    case 'famale':
                        return { arrayParent: listStandardFamale, rootGroupStandard: rootStandardFamale }
                    default:
                        return { arrayParent: [], rootGroupStandard: '' }
                }
            }

            //Function Render Element Standard
            function renderElementStandard(arr) {
                let result = '';
                arr.forEach((item, index) => {
                    result += `
                    <div class="form-group row align-items-center form-group-element mb-2" id=${item.id}>
                    <div class="col-lg-5">
                      <div class="input-group">
                        <input type="text" class="form-control" disabled placeholder="Nhập tên nội dung" value="${item.name}">
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <select class="form-control" disabled>
                        <optgroup label="Chọn đơn vị tính">
                        ${listUnit.map(itemU => {
                        return `<option value="${itemU.valueU}" ${itemU.valueU == item.value ? 'selected' : ''} >${itemU.nameU} </option>`
                    })}
                        </optgroup>
                      </select>
                    </div>
                    <div class="col-lg-1">
                      <a href="javascript:void(0)"
                        class="btn btn-outline bg-slate-600 text-slate-600 border-slate-600 legitRipple w-100 editElement"
                        data-popup="tooltip" title="Sửa" disabled>
                        <i class="icon-pencil7"></i>
                      </a>
                    </div>
                    <div class="col-lg-1">
                      <a href="javascript:void(0)" class="btn btn-outline-danger legitRipple w-100 removeElement"
                        data-popup="tooltip" title="Xóa">
                        <i class="icon-trash"></i>
                      </a>
                    </div>
                    <div class="col-lg-1">
                      <a href="javascript:void(0)"
                        class="btn btn-outline bg-slate-600 text-slate-600 border-slate-600 legitRipple w-100"
                        data-popup="tooltip" title="Danh sách đối tượng" data-toggle="modal"
                        data-target="#modal_standard">
                        <i class="icon-users4"></i>
                      </a>
                    </div>
                  </div>
                  `
                })

                return result
            }

            //Function Render Standard
            function renderStandard(arr, root, dataStandar) {
                let result = "";
                arr.forEach((item, index) => {
                    result += `
                    <div id=${item.id} class="card border-none boxShadow-none mb-0" data-standard=${dataStandar}>
                        <div class="card-header bg-lightblue header-elements-inline border-none py-1 ">
                            <h5 data-editable class="text-500 text-black mb-0">${item.title}</h5>
                            <div class="list-icons">
                            <div class="dropdown">
                                <a href="#" class="list-icons-item" data-toggle="dropdown">
                                <i class="icon-menu9 text-black"></i>
                                </a>
        
                                <div class="dropdown-menu dropdown-menu-right">
                                <a href="#" class="dropdown-item btnUpdate"><i class="icon-pencil7"></i> Sửa</a>
                                <a href="#" class="dropdown-item btnDelete text-danger" ><i class="icon-trash"></i>
                                    Xóa</a>
                                </div>
                            </div>
                            </div>
                        </div>
        
                        <div class="card-body pt-2 pb-0 px-0">
                            <div class="form-group row align-items-center mb-2">
                            <div class="col-lg-8">
                                <div class="input-group">
                                <input type="text" class="form-control" name="nStandard" placeholder="Nhập tên nội dung">
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <select class="form-control" name="sStandard">
                                <optgroup label="Chọn đơn vị tính">
                                ${listUnit.map(itemU => {
                        return `<option value="${itemU.valueU}">${itemU.nameU} </option>`
                    })}
                                </optgroup>
                                </select>
                            </div>
                            <div class="col-lg-1">
                                <a  href="javascript:void(0)"  class="btn bg-primary-color legitRipple w-100 addElement"
                                data-popup="tooltip" title="Danh sách đối tượng">
                                <i class="icon-plus3"></i>
                                </a>
                            </div>
                            </div>
                            ${item.children.length > 0 ? renderElementStandard(item.children) : ''}
        
                        </div>
                        </div>
                    `
                });

                root.innerHTML = result;

                //btnUpdate update text after click
                const listBtnUpdate = document.querySelectorAll('.btnUpdate');
                for (let index = 0; index < listBtnUpdate.length; index++) {
                    const element = listBtnUpdate[index];
                    element.onclick = function (e) {
                        e.preventDefault();
                        var $el = this.closest('.card').querySelector('h5');

                        var $input = document.createElement('input');
                        $input.setAttribute('type', 'text');
                        $input.classList.add('form-control', 'bg-white', 'w-50');
                        $input.value = $el.textContent;

                        $el.replaceWith($input);
                        $input.focus();
                        var save = function () {
                            var $h5 = document.createElement('h5');
                            $h5.classList.add('text-500', 'text-black', 'mb-0');
                            $h5.textContent = $input.value
                            $input.replaceWith($h5);

                            const elementCard = element.closest('.card');
                            const dataStandard = elementCard.dataset.standard;
                            const ID = elementCard.id

                            const { arrayParent } = checkDataStandard(dataStandard)
                            const indexItem = arrayParent.findIndex(item => item.id === ID)

                            arrayParent[indexItem] = { ...arrayParent[indexItem], title: $input.value }
                        };

                        $input.addEventListener('blur', save)
                    }

                }

                //btnDelete delete text after click
                const listbtnDelete = document.querySelectorAll('.btnDelete');
                for (let index = 0; index < listbtnDelete.length; index++) {
                    const element = listbtnDelete[index];
                    element.onclick = function (e) {
                        e.preventDefault();
                        const elementCard = element.closest('.card');
                        const dataStandard = elementCard.dataset.standard;
                        const ID = elementCard.id

                        const { arrayParent, rootGroupStandard } = checkDataStandard(dataStandard)
                        const indexItem = arrayParent.findIndex(item => item.id === ID)

                        arrayParent.splice(indexItem, 1)

                        setTimeout(() => {
                            renderStandard(arrayParent, rootGroupStandard, dataStandard);
                        }, 500);

                    }

                }

                // addElement Standard
                const elementStandard = document.querySelectorAll('.addElement');
                for (let index = 0; index < elementStandard.length; index++) {
                    const element = elementStandard[index];
                    element.onclick = function () {
                        const elementCard = element.closest('.card');
                        const dataStandard = elementCard.dataset.standard;
                        const ID = elementCard.id

                        const { arrayParent, rootGroupStandard } = checkDataStandard(dataStandard)
                        const indexItem = arrayParent.findIndex(item => item.id === ID)

                        const selectValue = elementCard.querySelector("select[name='sStandard']").value;
                        const nameValue = elementCard.querySelector("input[name='nStandard']").value;

                        if (!nameValue || nameValue.trim() === '') {
                            alert('Cần nhập tên nhóm tiêu chuẩn')
                        } else {
                            const childrendValue = {
                                id: IDRandom(),
                                name: nameValue.trim(),
                                value: selectValue,
                            }

                            arrayParent[indexItem].children.unshift(childrendValue)
                            renderStandard(arrayParent, rootGroupStandard, dataStandard);
                        }
                    }
                }

                // removeElement Standard
                const removeElement = document.querySelectorAll('.removeElement');
                for (let index = 0; index < removeElement.length; index++) {
                    const element = removeElement[index];
                    element.onclick = function (e) {
                        e.preventDefault();
                        const elementCard = element.closest('.card');
                        const dataStandard = elementCard.dataset.standard;
                        const ID = elementCard.id
                        const IdElement = element.closest('.form-group-element').id

                        const { arrayParent, rootGroupStandard } = checkDataStandard(dataStandard)
                        const indexItem = arrayParent.findIndex(item => item.id === ID)

                        const indexElementItem = arrayParent[indexItem].children.findIndex(item => item.id === IdElement)

                        arrayParent[indexItem].children.splice(indexElementItem, 1)
                        renderStandard(arrayParent, rootGroupStandard, dataStandard);
                    }
                }

                // EditElement Standard
                const editElement = document.querySelectorAll('.editElement');
                for (let index = 0; index < editElement.length; index++) {
                    const element = editElement[index];
                    element.onclick = function (e) {
                        e.preventDefault();
                        element.classList.toggle('activeSuccess');
                        const elementIcon = element.querySelector('i');

                        const formGroupElement = element.closest('.form-group-element');
                        const inputGroupElement = formGroupElement.querySelector("input");
                        const selectGroupElement = formGroupElement.querySelector("select");


                        if (element.className.includes('activeSuccess')) {
                            elementIcon.classList.add('icon-checkmark3')
                            inputGroupElement.removeAttribute('disabled')
                            selectGroupElement.removeAttribute('disabled')
                            inputGroupElement.focus()

                        } else {
                            const elementCard = element.closest('.card')
                            const dataStandard = elementCard.dataset.standard
                            const ID = elementCard.id
                            const IdElement = formGroupElement.id

                            const { arrayParent } = checkDataStandard(dataStandard)
                            const indexItem = arrayParent.findIndex(item => item.id === ID)
                            const indexElementItem = arrayParent[indexItem].children.findIndex(item => item.id === IdElement)

                            const newData = {
                                name: inputGroupElement.value,
                                value: selectGroupElement.value
                            }

                            arrayParent[indexItem].children[indexElementItem] = {
                                ...arrayParent[indexItem].children[indexElementItem],
                                ...newData
                            }

                            elementIcon.classList.remove('icon-checkmark3')
                            inputGroupElement.setAttribute('disabled', '')
                            selectGroupElement.setAttribute('disabled', '')

                            console.log(listStandardMale)
                            console.log(listStandardMaleUp)
                            console.log(listStandardFamale)
                        }

                    }
                }



            }

            renderStandard(listStandardMale, rootStandardMale, 'male')
            renderStandard(listStandardMaleUp, rootStandardMaleUp, 'maleUp')
            renderStandard(listStandardFamale, rootStandardFamale, 'famale')

            //Trigger focus Modal Group Standard  afeer show
            const modalGroupStandard = document.querySelector('#modal_group_standard')
            const formGroupStandard = modalGroupStandard.querySelector('#form_group_standard')

            $('#modal_group_standard').on('shown.bs.modal', function () {
                $('input[name="nameStandard"]').trigger('focus');
            })

            //Submit form addGroupStandard
            const addGroupStandard = document.querySelectorAll('.addGroupStandard')
            for (let index = 0; index < addGroupStandard.length; index++) {
                const element = addGroupStandard[index];
                element.onclick = function () {
                    const dataStandard = element.dataset.standard || 'male';
                    const { arrayParent, rootGroupStandard } = checkDataStandard(dataStandard)

                    formGroupStandard.onsubmit = function (e) {
                        e.preventDefault();

                        const value = e.target.nameStandard.value;
                        if (!value || value.trim() === '') {
                            alert('Cần nhập tên nhóm tiêu chuẩn')
                        } else {
                            const data = {
                                id: IDRandom(),
                                title: value,
                                children: []
                            }

                            arrayParent.unshift(data);
                            renderStandard(arrayParent, rootGroupStandard, dataStandard);
                            $('input[name="nameStandard"]').val('');
                            $('#modal_group_standard').modal('hide');
                        }
                    }
                }
            }
        }

    }

    //Check edit inside table from page 'QuanLyThongTu/detail'
    var _componentElementCustomTable = function () {

        const elementCustomTable = document.querySelector('.customTable')
        if (elementCustomTable) {
            function editableTable(listEditableActive) {
                // const listEditableActive = document.querySelectorAll('.editable.active');
                for (let index = 0; index < listEditableActive.length; index++) {
                    const element = listEditableActive[index];

                    element.onclick = function () {
                        listEditableActive.forEach(item => item.classList.remove('selected'))
                        console.log(element)
                        this.classList.add('selected')

                        var $input = document.createElement('input');
                        $input.setAttribute('type', 'text');
                        $input.value = this.textContent;

                        this.textContent = '';
                        this.appendChild($input)

                        $input.focus();
                        var save = function () {
                            element.innerHTML = $input.value;
                        };


                        $input.addEventListener('blur', save)
                        $input.addEventListener('keydown', event => {
                            if (event.keyCode === 13) {
                                save()
                            }
                        })
                    }
                }
            }

            const btnUpdateDetail = document.querySelector('.btnUpdateDetail');
            var isCheckUpdateDetail = false;
            btnUpdateDetail.onclick = function (e) {
                const listEditable = document.querySelectorAll('.editable');
                this.classList.toggle('bg-success')
                e.preventDefault();
                if (isCheckUpdateDetail) {
                    this.textContent = "Sửa";
                    listEditable.forEach(item => {
                        item.classList.remove('active')
                        item.classList.remove('selected')
                    })

                    for (let index = 0; index < listEditable.length; index++) {
                        const element = listEditable[index];
                        element.onclick = function () {
                            console.log('Disable')
                        }
                    }
                    isCheckUpdateDetail = !isCheckUpdateDetail

                } else {
                    this.textContent = "Lưu";
                    listEditable.forEach(item => item.classList.add('active'))
                    const listEditableActive = document.querySelectorAll('.editable.active');

                    editableTable(listEditableActive)
                    isCheckUpdateDetail = !isCheckUpdateDetail
                }
            }
        }
    }

    // Basic pie chart
    var _scatterPieBasicLightExample = function () {
        if (typeof echarts == 'undefined') {
            console.warn('Warning - echarts.min.js is not loaded.');
            return;
        }

        // Define element
        var pie_basic_element = document.getElementById('pie_basic');


        //
        // Charts configuration
        //

        if (pie_basic_element) {

            // Initialize chart
            var pie_basic = echarts.init(pie_basic_element);


            //
            // Chart config
            //

            // Options
            pie_basic.setOption({

                // Colors
                color: [
                    '#2ec7c9', '#5ab1ef', '#ffb980', '#d87a80', '#b6a2de',
                    '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
                    '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
                    '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
                ],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Add title
                // title: {
                //     text: 'Browser popularity',
                //     subtext: 'Open source information',
                //     left: 'center',
                //     textStyle: {
                //         fontSize: 17,
                //         fontWeight: 500
                //     },
                //     subtextStyle: {
                //         fontSize: 12
                //     }
                // },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    },
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },

                // Add legend
                legend: {
                    orient: 'horizontal',
                    left: 'center',
                    top: 'bottom',
                    data: ['Giỏi', 'Khá', 'Đạt', 'Không Đạt'],
                    itemHeight: 35,
                    itemWidth: 35,
                    borderRadius: 35,
                    paddingTop: 35
                },

                // Add series
                series: [{
                    name: 'Xếp loại',
                    type: 'pie',
                    radius: '70%',
                    center: ['50%', '45%'],
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            borderColor: '#fff'
                        }
                    },
                    data: [
                        {
                            value: 335,
                            name: 'Giỏi',
                            label: {
                                show: true,
                                position: 'top',
                                color: "black",
                                fontSize: 12,
                                formatter: function (d) {
                                    return d.name + ' ' + d.value;
                                }
                            }
                        },
                        {
                            value: 310,
                            name: 'Khá',
                            label: {
                                show: true,
                                position: 'top',
                                color: "black",
                                fontSize: 12,
                                formatter: function (d) {
                                    return d.name + ' ' + d.value;
                                }
                            }
                        },
                        {
                            value: 234,
                            name: 'Đạt',
                            label: {
                                show: true,
                                position: 'top',
                                color: "black",
                                fontSize: 12,
                                formatter: function (d) {
                                    return d.name + ' ' + d.value;
                                }
                            }
                        },
                        {
                            value: 135,
                            name: 'Không Đạt',
                            label: {
                                show: true,
                                position: 'top',
                                color: "black",
                                fontSize: 12,
                                formatter: function (d) {
                                    return d.name + ' ' + d.value;
                                }
                            }
                        },
                    ]
                }]
            });
        }


        //
        // Resize charts
        //

        // Resize function
        var triggerChartResize = function () {
            pie_basic_element && pie_basic.resize();
        };

        // On sidebar width change
        var sidebarToggle = document.querySelector('.sidebar-control');
        sidebarToggle && sidebarToggle.addEventListener('click', triggerChartResize);

        // On window resize
        var resizeCharts;
        window.addEventListener('resize', function () {
            clearTimeout(resizeCharts);
            resizeCharts = setTimeout(function () {
                triggerChartResize();
            }, 200);
        });
    };

    //
    // Return objects assigned to module
    //

    return {

        initPie: function () {
            _scatterPieBasicLightExample();
        },

        // Disable transitions before page is fully loaded
        initBeforeLoad: function () {
            _transitionsDisabled();
        },

        // Enable transitions when page is fully loaded
        initAfterLoad: function () {
            _transitionsEnabled();
        },

        // Initialize all sidebars
        initSidebars: function () {

            // On desktop
            _sidebarMainResize();
            _sidebarMainToggle();
            _sidebarSecondaryToggle();
            _sidebarRightMainToggle();
            _sidebarRightMainHide();
            _sidebarRightToggle();
            _sidebarRightSecondaryToggle();
            _sidebarComponentToggle();

            // On mobile
            _sidebarMobileFullscreen();
            _sidebarMobileMainToggle();
            _sidebarMobileSecondaryToggle();
            _sidebarMobileRightToggle();
            _sidebarMobileComponentToggle();
        },

        // Initialize all navigations
        initNavigations: function () {
            _navigationSidebar();
            _navigationNavbar();
        },

        // Initialize all components
        initComponents: function () {
            _componentTooltip();
            _componentPopover();
            _componentSweetAlert();
            // _componentSelect2Tree();
            _componentAnimationCSS();
            _componentDatatableBasic();
            _componentPickadate();
            _componentRenderTable();
            _componentFileUpload();
            _componentUniform();
            _componentMultiselect();
            _componentRenderUnitList();
            // _componentSel2ToTree();
            // _componentRenderObjectModal();
            _componentRenderStandar();
            // _componentElementCustomTable();


        },

        // Initialize all card actions
        initCardActions: function () {
            _cardActionReload();
            _cardActionCollapse();
            _cardActionRemove();
            _cardActionFullscreen();
        },

        // Dropdown submenu
        initDropdownSubmenu: function () {
            _dropdownSubmenu();
        },

        initHeaderElementsToggle: function () {
            _headerElements();
        },

        // Initialize core
        initCore: function () {
            App.initSidebars();
            App.initNavigations();
            App.initComponents();
            App.initCardActions();
            App.initDropdownSubmenu();
            App.initHeaderElementsToggle();
        }
    }
}();


// Initialize module
// ------------------------------

// When content is loaded
document.addEventListener('DOMContentLoaded', function () {
    App.initBeforeLoad();
    App.initCore();
    App.initComponents();

    //Submit form form_group_standard
});

// When page is fully loaded
window.addEventListener('load', function () {
    App.initAfterLoad();
    App.initPie();

});
