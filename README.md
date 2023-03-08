# Dynamic character sheet for the Destined role-playing game

---

This is a (mostly) automated character sheet for the Destined RPG by The Design Mechanism. It is written in pure JavaScript and utilizies basic HTML with some rudimentary CSS.

_Disclaimer:_

- I am not affliliated with The Design Mechanism, I just love Destined and their other games.
- I am not a web develeoper/designer, and it shows. While I can't make it look any better, the code is fully functional and solid for what it does.
- You are free to clone this repository and modify any of the code to your liking.

**What it does**:

- where you see a button, it calculates the corresponding values
- when the number of available skill points is set in the beginning, it automatically decreases and shows the current value in the remaining skill points section

**What it doesn’t do**:

- the small nitpicks like "if the Power Level is epic, add +1 to the Experience Modifier" and such things - it calculates RAW as in the tables (but any values can be changed by hand, naturally)
- various items like Power Level, Damage Mod and a few others like that - because first it's not a mechanical question but a decision (e.g. Power Level) or not a classic numeric value (integer) (e.g. Damage Mod) - but this may change in the future
- Professional Skill values is not calculated automatically - just because it is not hardcoded which ones a player would choose and I didn't want to bloat the sheet any more than this, but this may also change in a later iteration so the Characteristic-based calculations would be done automatically, as well (though when you enter the base value, enter te added skill, it calculates the skill points used and the total, as expected)
