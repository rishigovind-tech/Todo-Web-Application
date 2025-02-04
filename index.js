const todoContainer = $("#todo-container");
const todoText = $("#todo-text");
const todoBtn = $("#add-btn");

todoContainer.css({display:"flex",flexDirection:"column",gap:"8px"})
todoText.css("border-radius", "5px")

todoBtn.click(() => {
    if (todoText.val() === '') {
        alert("Add Something to the todo list")
    }
    else {
        const listContainer = $("<div>")
        listContainer.css("display", "flex");

        const inputText = todoText.val();
        const li = $("<li>");
        li.text(inputText);

        const dlt = $("<button>");
        dlt.css({borderRadius:"5px",borderColor:"none",marginLeft: "10px"})
        dlt.text("Delete")

        const complete =$("<button>")
        complete.css({borderRadius:"5px",marginLeft: "10px"})
        complete.text("Done")

        complete.click(() => {
            
            if (li.css("text-decoration").includes("line-through")) {
                li.css("text-decoration", "none");
                complete.text("Done");
            } else {
                li.css("text-decoration", "line-through");
                complete.text("Undone");
            }
        });

        const edit = $("<button>");
        edit.css({borderRadius:"5px",borderColor:"none",marginLeft: "10px"})
        edit.text("Edit")

        //Edit

        edit.click(() => {
            dlt.remove();
            edit.remove();
            complete.remove();

            const save = $("<button>");
            save.css({borderRadius:"5px",borderColor:"none",marginLeft: "10px"})
            save.text("Save");

            const editText = $("<input>");
            editText.val(li.text());

            li.text("");
            li.append(editText);

            listContainer.append(save);

            //save 

            save.click(() => {
                li.text(editText.val());
                save.remove();
                listContainer.append(edit, dlt,complete);

                attachEventListener(listContainer,li,dlt,edit,complete)


            })

        })

        listContainer.append(li, dlt, edit,complete);

        dlt.click(() => {
            console.log("del button clicked");
            listContainer.remove();

        })

        // --------------------------------------

        function attachEventListener(listContainer,li,dlt,edit,complete){
            edit.click(() => {
                dlt.remove();
                edit.remove();
                complete.remove();
    
                const save = $("<button>");
                save.css({bordeRadius:"5px",borderColor:"none",marginLeft: "20px"})
                save.text("Save");
    
                const editText = $("<input>");
                editText.val(li.text());
    
                li.text("");
                li.append(editText);
    
                listContainer.append(save);
    
                //save 
    
                save.click(() => {
                    li.text(editText.val());
                    save.remove();
                    listContainer.append(edit, dlt,complete);

                    attachEventListener(listContainer,li,dlt,edit,complete);
    
    
                })
    
            })
            dlt.click(() => {
                console.log("del button clicked");
                listContainer.remove();
    
            })
            complete.click(() => {
            
                if (li.css("text-decoration").includes("line-through")) {
                    li.css("text-decoration", "none");
                    complete.text("Done");
                } else {
                    li.css("text-decoration", "line-through");
                    complete.text("Undone");
                }
            });
        }


         // --------------------------------------

        todoContainer.append(listContainer)
        todoText.val('')


    }
})