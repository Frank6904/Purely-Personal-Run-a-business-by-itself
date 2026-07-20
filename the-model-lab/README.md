# The Model Lab

Visual model engines that turn expertise into drawable, sellable, teachable models. The master index is `geometry-grammar-catalogue.html`: twelve geometries, each with a definition, the cognitive theory, the build choreography, the outcome it produces, an earning test, a self-drawing fillable HTML worksheet (autosave, worked example, print to PDF), and a true editable PDF (form fields, fill in any PDF app). Four geometries also ship as Claude skills that interview you and pre-fill everything.

## The geometry grammar (12 shapes)

| # | Geometry | Worksheet | The question it answers |
|---|---|---|---|
| 01 | The Overlap (core model) | core-model | "What exactly is your method?" |
| 02 | The Pyramid | value-pyramid | "Where does the value land?" |
| 03 | The Mountain | mountain | "Where am I on the journey?" |
| 04 | The Three Roads | three-roads | "What happens if I wait?" |
| 05 | The Rings | rings | "What is at the center?" |
| 06 | The Four Rooms (2x2) | four-rooms | "Which room am I standing in?" |
| 07 | The Funnel | funnel | "Where does it leak?" |
| 08 | The Flywheel | flywheel | "What compounds?" |
| 09 | The Iceberg | iceberg | "What am I really buying?" |
| 10 | The Bridge | bridge | "How do I get across?" |
| 11 | The Ladder | ladder | "What is the next small step?" |
| 12 | The Curve | curve | "Is this a dip or a dead end?" |

Skills exist for 01-04 (`/core-model`, `/value-pyramid`, `/mountain`, `/three-roads`); the other eight follow the same pattern when needed.

## Folder map

- `geometry-grammar-catalogue.html` - the master catalogue (laws, chooser table, 12 entries, links to every tool)
- `skills/` - the Claude skills (install as a plugin or upload individually)
- `worksheets/` - 12 fillable HTMLs, self-contained, Purely Personal light standard, localStorage autosave, live self-drawing SVG, "Show worked example" button
- `pdf/` - 12 editable AcroForm PDFs + `build_pdfs.py` (rerun after edits: `python3 build_pdfs.py`)

## Install as a plugin

Push this folder to a repo, then:

```
claude plugin marketplace add <owner>/<repo>
claude plugin install the-model-lab@the-model-lab-marketplace
```

Or add it as an entry in the existing purely-personal-marketplace repo (copy the folder in, add the plugin entry to the root marketplace.json, bump, push, `claude plugin marketplace update`).

## The method rules baked into everything

Geometry carries the logic. Labels five words max, three better. One question per model. Entry, pathway, punchline, exit. Incremental agreement at every stroke. Guarantee the pathway, never the outcome. The model does the confronting; the person stays kind. Red, amber, green because they are hardwired. Symmetry always. No em dashes, ever.
