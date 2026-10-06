# 🎮 Miffy Fidget

A fun and interactive fidget toy web application featuring Miffy-themed mini-games and stress relief activities!

## Features

### 🌀 Spinner
Click to spin the Miffy spinner! Watch it rotate smoothly for 2 seconds with satisfying animations.

### 🫧 Pop It
Pop all 16 Miffy bubbles by clicking them. Toggle between popped and unpopped states for endless popping fun!

### 🎈 Floating Balloon
Three cute floating Miffy balloons in a dark container. Click to pop them and hear a crispy balloon pop sound effect. They respawn automatically!

### 🖱️ Clicker
Click the Miffy clicker to rack up points. Track your clicks and see how many times you can tap!

## How to Use

1. **Download or clone** this repository
2. **Open `index.html`** in your web browser
3. **Click away!** Interact with all the fidget toys

### Keyboard Shortcut
- Press **R** to reset all toys and click counter to zero

## Customization

### Change Images
Edit the image URLs in the CSS and JavaScript:

- **Spinner**: `url("miffy.jpg")`
- **Pop It Bubbles**: `url("miffypop.jpg")`
- **Floating Balloons**: `url("miffyballoon.jpg")`
- **Clicker**: `url("miffyclicker.jpg")`
- **Background**: `url("background.jpg")`

Replace these with your own image file paths!

### Sound Effects
The balloon pop uses a generated audio context. To customize:
- Modify the `playPop()` function in the JavaScript
- Adjust frequency, gain, and timing values

## File Structure

