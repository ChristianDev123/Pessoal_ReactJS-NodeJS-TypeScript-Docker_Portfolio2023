"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
class Post {
    constructor(attributes) {
        this.attributes = attributes;
        this.links = attributes.links;
    }
    get mainImage() {
        return this.attributes.mainImage;
    }
    set mainImage(value) {
        this.attributes.mainImage = value;
    }
    get title() {
        return this.attributes.title;
    }
    set title(value) {
        this.attributes.title = value;
    }
    get description() {
        return this.attributes.description;
    }
    set description(value) {
        this.attributes.description = value;
    }
    get links() {
        return this.attributes.links;
    }
    set links(value) {
        const jsonLinks = JSON.stringify(value);
        this.attributes.links = jsonLinks;
    }
}
exports.Post = Post;
