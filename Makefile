DOCS=docs
README=README.md

FOOTER=$(DOCS)/footer.html
HEADER=$(DOCS)/header.html
INDEX=$(DOCS)/index.html
STYLES=$(DOCS)/styles.css

$(DOCS): $(shell mkdir -p $(DOCS))
$(DOCS): $(INDEX)

$(FOOTER):
	@echo "<hr /><p style='text-align: center;'>Last update: $(shell date)</p>" \
		> $@

$(HEADER):
	@echo "\
		<p> \
			<a href='https://github.com/mgred/quickjs-types' target='_blank'> \
				<strong>Github</strong> \
			</a> \
		</p>" > $@

$(INDEX): $(README) $(HEADER) $(FOOTER) $(STYLES)
	@pandoc \
		--css $(notdir $(STYLES)) \
		--from gfm \
		--include-after-body $(FOOTER) \
		--include-before-body $(HEADER) \
		--metadata pagetitle="$$(head -1 $(README) | cut -c 3-)" \
		--output $@ \
		--standalone \
		--to html \
		$(README)

$(STYLES):
	@curl -s -L https://gist.githubusercontent.com/killercup/5917178/raw/40840de5352083adb2693dc742e9f75dbb18650f/pandoc.css \
		> $@

.PHONY: clean
clean:
	rm -rf docs
