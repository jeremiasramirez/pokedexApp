var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var boxImage = /** @class */ (function () {
        function boxImage(box_, images_) {
            if (box_ === void 0) { box_ = null; }
            if (images_ === void 0) { images_ = null; }
            this.box = 'null';
            this.images = 'null';
            if ((box_ !== null) && (images_ !== null)) {
                this.box = box_;
                this.images = images_;
            }
        }
        boxImage.prototype.setPlaceTo = function (destiny, element) {
            if ((destiny !== null && destiny !== undefined)) {
                destiny.appendChild(element);
            }
        };
        boxImage.prototype.modalSetAttribute = function (modal) {
            modal.setAttribute("class", "modal");
            modal.setAttribute("id", "modal");
        };
        boxImage.prototype.imageSetAttribute = function (imageFromModal, route) {
            imageFromModal.setAttribute("class", "imageFromModal");
            imageFromModal.setAttribute("id", "imageFromModal");
            imageFromModal.setAttribute("src", "route");
        };
        boxImage.prototype.createModal = function () {
            var htmlElementModal = document.createElement("section");
            // attribute modal
            this.modalSetAttribute(htmlElementModal);
            // place to modal
            this.setPlaceTo(document.body, htmlElementModal);
        };
        boxImage.prototype.createImage = function (route) {
            var modal = document.getElementById("modal"), htmlImage = document.createElement("img");
            htmlImage.setAttribute("src", route);
            if ((route !== null && route !== undefined)) {
                this.setPlaceTo(modal, htmlImage);
                this.imageSetAttribute(modal, route);
            }
        };
        return boxImage;
    }());
    var clientModal = /** @class */ (function (_super) {
        __extends(clientModal, _super);
        function clientModal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        clientModal.prototype.deleteModal = function () {
            var modalExistent = document.getElementById("imageFromModal");
            if (modalExistent) {
                modalExistent.addEventListener("click", function (e) {
                    modalExistent.classList.add("animOut");
                    setTimeout(function () {
                        modalExistent.remove();
                    }, 500);
                }, false);
            }
        };
        clientModal.prototype.clickOnImage = function () {
            var _this = this;
            var _loop_1 = function (i) {
                this_1.images[i].addEventListener("click", function (e) {
                    _this.createModal();
                    _this.createImage(_this.images[i].src);
                    _this.deleteModal();
                }, false);
            };
            var this_1 = this;
            for (var i = 0; i < this.images.length; i++) {
                _loop_1(i);
            }
        };
        return clientModal;
    }(boxImage));
    var blockEvent = /** @class */ (function (_super) {
        __extends(blockEvent, _super);
        function blockEvent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        blockEvent.prototype.lockedEvent = function (trueEvent) {
            if ((this.box) && (trueEvent === true)) {
                this.box.addEventListener("contextmenu", function (e) {
                    e.preventDefault();
                }, false);
            }
        };
        return blockEvent;
    }(boxImage));
    var containerImages__ = document.getElementById("box--images"), imagesFromContainer__ = containerImages__.getElementsByTagName("img");
    var executeBox__ = function (containerImages__, imagesFromContainer__) {
        if (containerImages__ === void 0) { containerImages__ = null; }
        if (imagesFromContainer__ === void 0) { imagesFromContainer__ = null; }
        if ((containerImages__ === null) ||
            (imagesFromContainer__ === null) ||
            (containerImages__ === undefined) ||
            (imagesFromContainer__ === undefined)) {
            console.log("container not exist");
        }
        else {
            var modal1 = new clientModal(containerImages__, imagesFromContainer__);
            modal1.clickOnImage();
            var lockEvent = new blockEvent(containerImages__, imagesFromContainer__);
            lockEvent.lockedEvent(true);
        }
    };
    executeBox__(containerImages__, imagesFromContainer__);
})();
