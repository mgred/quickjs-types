DOCS=docs

.PHONY: all
all: test docs

.PHONY: test
test:
	@tsc --project .

$(DOCS)/header.html:
	@echo "[Github](htts://github.com/mgred/quickjs-types)" | \
		pandoc --from markdown --to html --output $@

$(DOCS)/style.css:
	@curl -s -L https://gist.githubusercontent.com/killercup/5917178/raw/40840de5352083adb2693dc742e9f75dbb18650f/pandoc.css > $@

$(DOCS): $(shell mkdir -p $(DOCS))
$(DOCS): $(DOCS)/index.html
$(DOCS)/index.html: README.md $(DOCS)/header.html $(DOCS)/style.css
	@pandoc \
		--standalone \
		--include-in-header $(DOCS)/header.html \
		--css ./style.css \
		--metadata pagetitle="$$(head -1 README.md | cut -c 3-)" \
		--from gfm \
		--to html \
		--output $@ \
		README.md

.PHONY: clean
clean:
	rm -rf docs
