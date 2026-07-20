#!/usr/bin/env python3
"""Build editable (AcroForm) PDFs for the four Model Lab worksheets.
Brand: Purely Personal fillable-doc standard. Rerun any time: python3 build_pdfs.py
"""
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
import os

PAGE_W, PAGE_H = A4
INK = HexColor("#17171B")
DIM = HexColor("#6B6B74")
ACCENT = HexColor("#F01621")
BORDER = HexColor("#E5E3DE")
HEAD = HexColor("#F1F0EC")
PAGEBG = HexColor("#F7F6F3")
FIELDBG = HexColor("#FCFBF9")

M = 46  # margin


class Sheet:
    def __init__(self, path, title, lede):
        self.c = canvas.Canvas(path, pagesize=A4)
        self.c.setTitle(title)
        self.y = PAGE_H - 54
        self.n = 0
        self.header(title, lede)

    def bg(self):
        self.c.setFillColor(PAGEBG)
        self.c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)

    def header(self, title, lede):
        self.bg()
        c = self.c
        c.setFillColor(ACCENT)
        c.setFont("Courier-Bold", 8.5)
        c.drawString(M, self.y, "PURELY PERSONAL  ·  THE MODEL LAB")
        self.y -= 26
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 26)
        c.drawString(M, self.y, title)
        self.y -= 16
        c.setFillColor(DIM)
        c.setFont("Helvetica", 10)
        for line in wrap(lede, 92):
            c.drawString(M, self.y, line)
            self.y -= 13
        self.y -= 10

    def need(self, h):
        if self.y - h < 56:
            self.footer()
            self.c.showPage()
            self.bg()
            self.y = PAGE_H - 60

    def section(self, label, sub=""):
        self.need(46)
        c = self.c
        self.n += 1
        c.setFillColor(HEAD)
        c.roundRect(M, self.y - 26, PAGE_W - 2 * M, 26, 6, stroke=0, fill=1)
        c.setFillColor(ACCENT)
        c.circle(M + 15, self.y - 13, 8.5, stroke=0, fill=1)
        c.setFillColor(HexColor("#FFFFFF"))
        c.setFont("Courier-Bold", 9)
        c.drawCentredString(M + 15, self.y - 16, str(self.n))
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 11)
        c.drawString(M + 30, self.y - 17.5, label)
        if sub:
            c.setFillColor(DIM)
            c.setFont("Courier", 7.5)
            c.drawRightString(PAGE_W - M - 10, self.y - 17, sub.upper())
        self.y -= 36

    def field(self, qid, label, hint, h=54):
        block = 13 + (11 if hint else 0) + h + 14
        self.need(block)
        c = self.c
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 9.5)
        c.drawString(M, self.y, label)
        self.y -= 11
        if hint:
            c.setFillColor(DIM)
            c.setFont("Helvetica-Oblique", 8)
            for line in wrap(hint, 110)[:2]:
                c.drawString(M, self.y, line)
                self.y -= 10
        self.y -= 4
        c.acroForm.textfield(
            name=qid, tooltip=label,
            x=M, y=self.y - h, width=PAGE_W - 2 * M, height=h,
            borderColor=BORDER, fillColor=FIELDBG, textColor=INK,
            fontName="Helvetica", fontSize=9,
            fieldFlags="multiline" if h > 26 else "",
            borderWidth=1,
        )
        self.y -= h + 14

    def footer(self):
        c = self.c
        c.setFillColor(DIM)
        c.setFont("Courier", 7)
        c.drawCentredString(PAGE_W / 2, 34, "PURELY PERSONAL · THE MODEL LAB · FILL DIGITALLY IN ANY PDF APP, ANSWERS SAVE WITH THE FILE")

    def done(self):
        self.footer()
        self.c.save()


def wrap(text, width):
    words, lines, cur = text.split(), [], ""
    for w in words:
        if len(cur) + len(w) + 1 > width:
            lines.append(cur)
            cur = w
        else:
            cur = (cur + " " + w).strip()
    if cur:
        lines.append(cur)
    return lines


out = os.path.dirname(os.path.abspath(__file__))

# 1. CORE MODEL
s = Sheet(os.path.join(out, "core-model-worksheet.pdf"), "The Core Model",
          "Your whole method in one seven-minute drawing. The client's big promise in the center, the three outcomes you create every time around it, and the nine moves you make better than anyone else around those.")
s.section("Your example", "2 min")
s.field("who", "What do you do, and who do you do it for?", "Then the test: do you know more about this, for these people, than anyone else? If not, narrow it until you do.")
s.section("The center: the big promise", "what they want most")
s.field("promise", "What does your client want most, in their words?", "The client sits geometrically in the middle of your business. Everything is built around what THEY want.")
s.field("promise_short", "The promise, compressed to five words or fewer", "", 22)
s.section("The three outcomes", "every client, every time")
for i in range(1, 4):
    s.field(f"outcome_{i}", f"Outcome {i}: a result you create for every client no matter what", "Not a feature or deliverable. When drawing live, ask 'would this result matter to you?' and wait for the yes.", 40)
    s.field(f"outcome_{i}_short", f"Outcome {i}, compressed to five words or fewer", "", 20)
s.section("The nine moves", "3 per outcome")
for o in range(1, 4):
    for m in range(1, 4):
        s.field(f"move_{o}_{m}", f"Outcome {o}, move {m}: something you do better than everybody else (verb first)", "", 20)
s.section("The choreography", "7 minutes, 4 beats")
s.field("entry", "Entry: your disarming first line as you reach for the pen", "'I think I can draw this' watches the whole room relax.", 22)
s.field("punchline", "Punchline: the sentence that flips their old belief", "Deliver it right after the center lands, touch the drawing as you say it, then three seconds of silence.")
s.field("exit", "Exit: the bridge to what happens next", "", 22)
s.field("colabel", "Which part will you let THEM label?", "It is hard to disagree with a model you partially built.", 22)
s.done()

# 2. VALUE PYRAMID
s = Sheet(os.path.join(out, "value-pyramid-worksheet.pdf"), "The Value Pyramid",
          "Where does your offer's value land? Great offers work on all four layers: fix something today, prevent something tomorrow, improve what already works, transform who the client is.")
s.section("Your example", "2 min")
s.field("offer", "What is the offer you are mapping?", "One sentence: the thing you sell, who buys it, roughly what they pay.")
s.section("The base: fix", "today's pain")
s.field("fix", "What burning problem do you solve the day they start?", "Something they would pay to make go away this week.")
s.field("fix_short", "Compressed to five words or fewer, plus your score (red / amber / green)", "", 22)
s.section("Layer two: prevent", "6-12 months out")
s.field("prevent", "What future problem will never happen because they worked with you?", "The expensive mistake or slow decline they will now never meet.")
s.field("prevent_short", "Compressed to five words or fewer, plus your score (red / amber / green)", "", 22)
s.section("Layer three: improve", "measurably better")
s.field("improve", "What already-good thing gets measurably better?", "Your best buyers are not broken. What do they already do well that you multiply?")
s.field("improve_short", "Compressed to five words or fewer, plus your score (red / amber / green)", "", 22)
s.section("The summit: transform", "identity")
s.field("transform", "Who do they become?", "Not what they get. Who they are after.")
s.field("transform_short", "Compressed to five words or fewer, plus your score (red / amber / green)", "", 22)
s.section("The value sentence", "put it together")
s.field("value_sentence", "Say the whole pyramid in one sentence", "We fix [base] this week, so you never face [prevent], while [improve] gets better, until you become [transform].")
s.field("lead_layer", "Which layer does your marketing lead with today, and is that right?", "Strangers buy the base. Friends of the work buy the summit.")
s.done()

# 3. MOUNTAIN
s = Sheet(os.path.join(out, "mountain-worksheet.pdf"), "The Mountain",
          "The client journey as a climb: the base where they start, the belief line they must cross, three camps of your method, and the view from the summit.")
s.section("Your example", "2 min")
s.field("journey", "Whose journey is this, and toward what?", "One sentence: the client, where they are, where your offer takes them.")
s.section("The base: where they start", "day zero")
s.field("base", "Describe day zero honestly", "Their week, what they tried, what they believe about themselves. Use their words.")
s.field("base_short", "The base, compressed to five words or fewer", "", 22)
s.section("The belief line", "the crossing")
s.field("belief_line", "What belief has to break before the climb can start?", "Below the line they are a spectator, above it a climber. Name the exact belief that flips.")
s.section("The climb: three camps", "the method")
for i in range(1, 4):
    s.field(f"camp{i}_name", f"Camp {i} name (two or three words)", "", 20)
    s.field(f"camp{i}_what", f"What happens at camp {i}?", "", 40)
s.field("climb_short", "The climb as a whole, compressed to five words or fewer", "", 22)
s.section("The summit", "the view")
s.field("summit", "What can they see from the top that they could not see from the base?", "The summit is not the certificate. It is the view.")
s.field("summit_short", "The summit, compressed to five words or fewer", "", 22)
s.field("guide_sentence", "The guide sentence", "Finish: 'I cannot carry you up, but I know every camp, and I know you will...'")
s.done()

# 4. THREE ROADS
s = Sheet(os.path.join(out, "three-roads-worksheet.pdf"), "The Three Roads",
          "Eighteen months from today your client stands on one of three roads: green (act), grey (drift), red (erode). You cannot guarantee the outcome. You can guarantee the pathway.")
s.section("Today, without judgement", "the dot")
s.field("today", "Describe today in plain facts", "Numbers where possible: hours, revenue, leads, energy. There is nothing wrong with today.")
s.field("today_short", "Today, compressed to five words or fewer", "", 22)
s.field("peg", "The peg in the sand: rule a line on the past", "Your version of: 'Everything before today doesn't matter anymore, and it wasn't entirely your fault.' Shame looks backward; this model needs them looking forward.")
s.section("The green road: act", "the pathway")
s.field("green_6", "What is true at 6 months on the green road?", "", 40)
s.field("green_12", "What is true at 12 months?", "", 40)
s.field("green_18", "What is true at 18 months?", "", 40)
s.field("green_short", "The green road, compressed to five words or fewer", "", 22)
s.section("The grey road: drift", "the honest middle")
s.field("grey", "Same effort, same habits: where does the grey road lead in 18 months?", "Not a disaster. Today repeated 540 times, with more fatigue. It feels free; it is the most expensive road.")
s.field("grey_short", "The grey road, compressed to five words or fewer", "", 22)
s.section("The red road: erode", "what decays")
s.field("red", "What actively gets worse if nothing changes?", "Which client, skill or position quietly erodes? Who is learning faster? Factual, not frightening.")
s.field("red_short", "The red road, compressed to five words or fewer", "", 22)
s.section("The gap and the guarantee", "the close")
s.field("gap_sentence", "The gap sentence (one line about the 18-month gap)", "", 22)
s.field("pathway", "The pathway promise: what CAN you guarantee?", "The steps, the support, the checkpoints. Written the way you speak.")
s.field("first_step", "The first step on the green road, this week", "Small and concrete. The model creates the decision; this field catches it.")
s.done()

# 5. THE RINGS
s = Sheet(os.path.join(out, "rings-worksheet.pdf"), "The Rings",
          "What lives at the center, what orbits it, and what stays outside. Rings sort a messy world by closeness to the one thing that matters. Fill from the center outward.")
s.section("Your example", "2 min")
s.field("what", "What are you sorting into rings?", "Offers by closeness to your genius, audience by intimacy, your week by priority. Name the world you are organising.")
s.section("The center", "drawn first, always")
s.field("core", "What is the one thing everything else orbits?", "The test: if this disappeared, the rest would be pointless.")
s.field("core_short", "The center, compressed to three words", "", 22)
s.section("The three rings", "closest to farthest")
for i, hint in [(1, "What touches the core directly. Fewest things, most of you."), (2, "The middle distance."), (3, "Barely inside the model. Most things, least of you.")]:
    s.field(f"ring{i}", f"Ring {i}", hint, 40)
    s.field(f"ring{i}_short", f"Ring {i}, compressed to five words or fewer", "", 20)
s.section("Outside the rings", "the punchline")
s.field("outside", "What is deliberately outside, and why?", "A rings model without a named outside is a decoration.")
s.field("punchline", "The punchline", "Usually: most people work from the outside in. We work from the center out.")
s.done()

# 6. THE FOUR ROOMS
s = Sheet(os.path.join(out, "four-rooms-worksheet.pdf"), "The Four Rooms",
          "Two tensions make four rooms, and everyone can suddenly see which room they are standing in. Sorting into space beats arguing in words.")
s.section("Your example", "2 min")
s.field("what", "What decision or population are you sorting?", "Tasks, clients, content, competitors: anything that needs four verdicts.")
s.section("The two tensions", "the axes")
s.field("x_axis", "Horizontal axis, with both poles named", "Reasonable people must be able to land on either end.", 22)
s.field("y_axis", "Vertical axis, with both poles named", "", 22)
s.section("Name the four rooms", "nicknames stick")
for pos in ["Top right (the target)", "Top left", "Bottom left", "Bottom right"]:
    s.field(pos.lower().replace(" ", "_").replace("(", "").replace(")", ""), f"{pos}: name + what happens to things living here", "", 34)
s.section("The sort and the reveal", "choreography")
s.field("place", "Place three real things on the board", "The model only lands when real items get sorted.")
s.field("punchline", "The reveal", "The room people THINK they are in versus the room they are in, or the hidden fifth space.")
s.done()

# 7. THE FUNNEL
s = Sheet(os.path.join(out, "funnel-worksheet.pdf"), "The Funnel",
          "Many enter, few arrive, and the difference leaks out the sides. The funnel's job is to make ONE leak undeniable, so this quarter has one job.")
s.section("Your example", "2 min")
s.field("what", "What journey are you funneling?", "Stranger to client, applicant to hire, reader to buyer.")
s.section("The four stages", "with real numbers")
for i in range(1, 5):
    s.field(f"stage_{i}", f"Stage {i}: name (traveller's point of view) + last month's real number", "", 24)
s.section("The leak", "one, not four")
s.field("leak", "Between which two stages do you lose the most?", "Divide each stage by the one above. The worst ratio is THE leak.", 22)
s.field("why", "Why do they fall out there, in the traveller's words?", "")
s.field("fix", "The one fix this quarter", "One change aimed at one leak.")
s.field("punchline", "The punchline", "Usually: you don't have a traffic problem, you have a [leak stage] problem.")
s.done()

# 8. THE FLYWHEEL
s = Sheet(os.path.join(out, "flywheel-worksheet.pdf"), "The Flywheel",
          "A list says do these things. A loop says each thing makes the next one easier. That difference is momentum.")
s.section("Your example", "2 min")
s.field("what", "What system are you turning into a loop?", "Anything meant to run on momentum instead of willpower.")
s.section("The four parts", "each feeds the next")
for i in range(1, 5):
    s.field(f"part_{i}", f"Part {i}: name + how it feeds part {i % 4 + 1}", "Test: when this goes well, does the next genuinely get easier?", 34)
s.field("fuel", "The fuel: what compounds in the center? (3 words max)", "Trust, data, proof, audience, skill.", 20)
s.section("Push and drag", "the physics")
s.field("push", "The first push: how does the wheel start from zero?", "Small, manual, unglamorous.")
s.field("drag", "The drag: what slows the wheel, and how do you remove it?", "")
s.field("punchline", "The punchline", "Usually: you don't need more effort, you need the turns to add up.")
s.done()

# 9. THE ICEBERG
s = Sheet(os.path.join(out, "iceberg-worksheet.pdf"), "The Iceberg",
          "Only ten percent is above the waterline, and the iceberg always moves in the direction of the base. Walk a shallow request down to meaning.")
s.section("Your example", "2 min")
s.field("what", "Whose request are you deepening? Their arrival sentence, verbatim", "")
s.section("Above the line: the ask", "the known conversation")
s.field("ask", "What do they ask for, in their exact words?", "Where the market competes and price wars live.")
s.field("ask_short", "Compressed to five words or fewer", "", 20)
s.section("Below the line: the want", "the hidden conversation")
s.field("want", "What would they admit wanting, if asked kindly?", "The emotional outcome. Competitors claim this level too.")
s.field("want_short", "Compressed to five words or fewer", "", 20)
s.section("The base: the meaning", "the unknown conversation")
s.field("meaning", "What does it MEAN to them, never said out loud?", "Only you can see this level. If it comes easily, it is still the want.")
s.field("meaning_short", "Compressed to five words or fewer", "", 20)
s.field("fork", "The fork question: your version of 'shallow or deep?'", "", 22)
s.field("punchline", "The base question: 'Do you want [the ask], or do you want [the meaning]?'", "")
s.done()

# 10. THE BRIDGE
s = Sheet(os.path.join(out, "bridge-worksheet.pdf"), "The Bridge",
          "Two cliffs, a gap, and planks. The far side is real, the drop is named, and every plank is a step someone has walked before.")
s.section("The near cliff: here", "no judgement")
s.field("here", "Where do they stand today, in plain facts?", "The near cliff is solid. It holds them fine, it just does not go anywhere.")
s.section("The far cliff: there", "their words")
s.field("there", "Where do they want to stand, in THEIR words?", "Slightly higher, and real: their language, not your copy.")
s.section("The drop", "name it once, kindly")
s.field("drop", "What happens to people who jump the gap without a bridge?", "Why DIY fails. Once, factually, then leave it alone.")
s.section("The three planks", "your method")
for i in range(1, 4):
    s.field(f"plank_{i}", f"Plank {i}: name + the step + proof someone crossed on it", "", 34)
s.field("handrail", "The handrail: what keeps them safe the whole way across?", "The support that never leaves.")
s.field("punchline", "The punchline", "Usually: you don't need more courage, you need a bridge that has held everyone before you.")
s.done()

# 11. THE LADDER
s = Sheet(os.path.join(out, "ladder-worksheet.pdf"), "The Ladder",
          "Steps make progress countable and the next move small. A good ladder never asks anyone to jump.")
s.section("Your example", "2 min")
s.field("what", "What ascent are you designing?", "Offers by price and trust, a skill from beginner to teacher, stranger to advocate.")
s.section("The four rungs", "bottom to top")
for i in range(1, 5):
    s.field(f"rung_{i}", f"Rung {i}: name + price/ask + what it proves to the climber", "Is the step up small enough to feel like continuation?", 34)
s.section("The entry and the stall", "the diagnosis")
s.field("entry", "Where do most people enter the ladder, and what convinces them?", "")
s.field("stall", "Where do climbers stall, and what reason to climb is missing?", "The stall is your next offer or your next belief-shift.")
s.field("rule", "The ladder rule, in one line", "e.g. nobody jumps, everybody climbs.", 20)
s.done()

# 12. THE CURVE
s = Sheet(os.path.join(out, "curve-worksheet.pdf"), "The Curve",
          "Flat start, dip, knee, climb. When someone sees 'you are here' on a shape that ends well, the trough stops meaning failure.")
s.section("Your example", "2 min")
s.field("what", "Whose journey is this curve, and what do the axes measure?", "The vertical axis choice IS the argument. Name it honestly.")
s.section("The flat and the dip", "where quitting happens")
s.field("flat", "The flat: what does the early grind feel like, from inside?", "Their words, so they think: that's me.")
s.field("dip", "The dip: what does it test, and how is it different from a dead end?", "If you cannot name the difference, the model becomes a trap.")
s.section("The knee and the climb", "what compounds")
s.field("knee", "The knee: the observable signal that the curve is about to turn", "A signal, not a feeling: the first inbound DM, the first output in their voice.")
s.field("climb", "The climb: what compounds once the knee passes?", "The asset that accumulated silently during the flat.")
s.field("here", "Place your person on the curve, out loud", "You are here. And this part is on the map.")
s.done()

print("Built 12 editable PDFs in", out)
