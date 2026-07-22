# The Stage Lab — Permanent Cast

14 fixed characters, generated once on Higgsfield (Nano Banana Pro, 2026-07-22, ~26 credits total). **Never regenerate these.** Every story scene is produced by EDITING an anchor: pass the character's anchor image as the reference (`medias: [{value: <media/job id or re-uploaded anchor>, role: "image"}]`) and prompt the new scene with the Kontext grammar — *name the character's look → describe the new scene/shot/emotion → "Keep the facial features, hairstyle and wardrobe exactly the same as the reference image."* One scene = ~2 credits.

Style bible (verbatim prefix of every anchor, reuse for any new cast member):
"3D animated feature-film character render, modern animation studio style: … Full-body character reference pose, standing relaxed facing camera, soft even studio lighting, plain warm neutral background, high-detail stylized 3D render, glossy subsurface skin, soft rim light. No text, no watermark."

| Anchor | Name | Role archetype | Identity string (use verbatim when editing) |
|---|---|---|---|
| danny.png | **Danny** | THE PRESENTER — Danny Paul himself (built from his real photos, with his consent). Use for any beat where the narrator enters his own story: on stage, teaching, at the whiteboard. | "the man with black swept-back hair, strong dark eyebrows, warm confident smile, fitted black crew-neck t-shirt and dark smartwatch" |
| maya.png | Maya | The hero coach/solopreneur, late 30s | "the woman with long wavy chestnut hair, hazel eyes, light freckles, light-blue shirt, gold necklace and bright red scarf" |
| david.png | David | Consultant/advisor, mid-40s | "the man with round tortoiseshell glasses, salt-and-pepper hair, short beard, navy sweater over white collar" |
| rose.png | Rose | Established businesswoman/realtor, mid-50s | "the woman with shoulder-length auburn hair with gray streaks, green eyes, camel blazer, pearl earrings" |
| sam.png | Sam | Young starter/student, early 20s | "the young man with curly black hair, light stubble, teal hoodie, headphones around his neck" |
| grace.png | Grace | Elder woman/mentor, late 60s | "the silver-haired woman with a loose bun, dusty-rose cardigan, reading glasses on a chain" |
| walter.png | Walter | Elder man/veteran, late 60s | "the white-haired man with a trimmed white mustache, mustard-yellow knitted cardigan" |
| leo.png | Leo | Kid boy, ~8 | "the freckled boy with a backwards red cap, messy chestnut hair, green striped t-shirt, gap-toothed grin" |
| zoe.png | Zoe | Kid girl, ~10 | "the girl with two puff buns and yellow ribbons, deep brown skin, sunny yellow dress, small backpack" |
| amara.png | Amara | Entrepreneur, early 30s | "the woman with long black box braids over one shoulder, deep brown skin, terracotta blazer, gold hoops" |
| ken.png | Ken | Professional, mid-30s | "the East Asian man with neatly styled short black hair, denim shirt with rolled sleeves, smartwatch" |
| ben.png | Ben | Athletic/energetic, late 20s | "the athletic man with sun-streaked brown hair, stubble, olive skin, burnt-orange zip jacket" |
| buddy.png | Buddy | The dog | "the fluffy golden retriever with a red collar and gold tag" |
| pixel.png | Pixel | The cat | "the gray tabby cat with white chest and paws, amber eyes, tiny teal collar with a bell" |

## Usage rules

- **Cast by role**: kid roles → Leo/Zoe. Elders → Grace/Walter. Never age-miscast. Pets welcome as emotional garnish.
- **One hero per deck**, supporting cast max 2 per scene.
- To put a cast member in a scene: upload/reference their anchor PNG from this directory (via `media_upload` or an existing job id), then edit-generate the scene at 16:9 2k with the shot/light grammar from `../references/storytelling-grammar.md` and negative-space composition for the caption side.
- New cast members: generate ONCE with the style bible at 3:4 1k, save the PNG + add a row here, then only ever edit.
- If a generated scene drifts (different face/wardrobe), regenerate that scene with a stronger "exactly the same as the reference" clause — never accept drift into a deck.
