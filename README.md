# mermaid-tw5

# wrapper for mermaid
https://knsv.github.io/mermaid/

place the <$mermaid> widget and then use the mermaid syntax with in the text.

~~~~
<$mermaid text="
        graph LR
            A-->B
            B-->C
            C-->A
            D-->C
"><$mermaid>
~~~~


An alternative method is to make the Tiddler type to be ``text/vnd.tiddlywiki.mermaid``.
You can also try putting the mermaid syntax within the <$mermaid> element, but this does not work as well due to TW5 parsing.

