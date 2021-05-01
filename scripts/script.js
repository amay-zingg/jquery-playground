 $(() => {

    /* * * * * * * * * * * * * * DRAGGABLE USES * * * * * * * * * * * * * * */
    // Can only move horizontally 
    // $(".box1").draggable({axis: "x"});

    // Can only move vertically 
    // $(".box2").draggable({ axis: "y" });

    // Can only move inside container
    // $(".box3").draggable({ containment: ".container" });

    // Select two things at the same time
    // $(".inner-box, p").draggable({ containment: ".container" });

    // Select two things at the same time, and make sure one thing cannot move
    // $(".inner-box, p").draggable({ containment: ".container", cancel: ".box2" });

    // Make sure one thing cannot move (same outcome as above, different way to select it)
    // $("p:last-child").draggable({ disabled: true });

    // Selection cursors, and where the cursor appears when dragging
    // $(".box1").draggable({ cursor: "grab", cursorAt: {left: 5, top: 5} });
    
    // The item only moves when the p element is clicked, or {cancel: "p"} to restict movement if the p is clicked on
    // $(".box2").draggable({ cursor: "move", handle: "p" });
    // $(".box3").draggable({ cursor: "crosshair", cursorAt: { right: 5 }  });

    // Jumping to the amount of pixels specified. (0 won't move left to right, 100px jump up and down)
    // $(".box1").draggable({ grid: [0,100] });

    // Will move back to where it was dragged from, duration is 500 by default
    // $(".box2").draggable({revert: true, revertDuration: 5000});

    //Now change the way it looks
    // $(".box3").draggable({ revert: function(){$(".box3").css("background", "purple"); return true; }});

    // Add a helper, a clone, 
    // $(".box1").draggable({ helper: "clone", opacity: .5 });

    // Helper with custom created Div, not a clone
    $(".box2").draggable({ helper: function() { return $("<div style='border: 2px solid black; color: white, background: teal'><p>Custom Helper</p></div>")}});

    // Snap is like a magnetic cling, snap tolerance is movement in px to edge of snappable elements
    $(".box2").draggable({ snap: true, snapTolerance: 100 });

    // Snap to an element and where it snaps to
    $(".box3").draggable({ snap: ".inner-box", snapMode: "inner" });

    // * * * * NOW MAKING A BUTTON THAT MAKES THE BOX DRAGGABLE ON CLICK
    $("#btn-create").click(function() {
        $("#item").draggable({create:function(){
            alert("A draggable element was created!");
        }, 
        start:function(){
            $("#item").css("background", "teal");
        },
        drag:function(){
            $("#status").html("The element is moving!!");
        },
        stop:function(){
            $("#status").html("The element stopped moving!!");
        }});
    });
});