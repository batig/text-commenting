# Text Commenting

A simple frontend app to highlight text and associate it with comments.

## Requirements
* A structured text with varying elements on the left. The text can be provided inline.
* A sidebar containing a list of comments on the right.
* The sidebar should contain a button that opens a modal for comment creation.
* Each comment should:
  * Be associated with a highlight. The association is achieved by assigning data attributes containing an ID-like number to each comment and highlight.
  * Be clickable, in which case both the comment and the associated note are highlighted.
  * Have a button that allows its removal.
* No persistence needed at this stage.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Installation

Clone the repo and then
```
npm install
npm run build
```

## Known Issues
* Can't highlight text spanning over multiple elements e.g. h1 and p.
* Can't highlight text that's already in a highlight or note.
* Visual bug where long words break the comments sidebar.

## TODO
* Fix known issues.
* Persistence. Would like to use localStorage.
* Remove unnecessary dependencies e.g. non-modal Bootstrap js for performance and well, independence.
* Responsive.
* Use Rangy. Provides better browser support plus more elaborate functionality like selecting text spanning over elements.
* Better document the code.
* Test the code.
* Scroll to highlight when the highlight associated with a comment is outside the viewable area in the text container.
