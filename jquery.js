

      var changePos;
      var changePos1;
      var changePos3;
      var addVal;
      var iid;
      var email=2;
      var countSkill=0;
      var arr=[];
      var addd=1;
      var boolAddEdit =true;
        
    $(document).ready(function(){

      $("#btn-1").click(function(){
        console.log($('input[name="flexRadioDefault"]:checked').val());
        console.log($('input[name="flexRadioDefault1"]:checked').val());
        $("#part-1").hide();
        $("#part-3").show();
      });
     /* $("#btn-2").click(function(){
        $("#part-2").hide();
        $("#part-3").show();
      }); */
      $("#btn-3").click(function(){
        for(i=0;i<arr.length;i++){
          if($('#'+arr[i]).is('.btn-outline-danger'))
          {
          $('#'+arr[i]).clone().prop("id", arr[i]+"logical").removeAttr('onclick').attr("onclick","changePos3('"+arr[i]+"logical"+"')").appendTo("#skilset");
        }
      }
        $("#part-3").hide();
        $("#part-4").show();

      });
      changePos3=function(clicked_id){
        console.log(clicked_id);


        if($('#'+clicked_id).is('.btn-outline-danger')&& boolAddEdit==true)
        {
            console.log("changepos3")
        $('#'+clicked_id).appendTo("#emailbody"+addd).addClass('btn-outline-success').removeClass('btn-outline-danger');
        //$($('#'+clicked_id).attr("data-target")).modal("show");
        
        //$('#'+clicked_id).removeAttr('data-bs-toggle');
        //countSkill++;

        }
        
       else
        {
          $('#'+clicked_id).appendTo("#skilset").addClass('btn-outline-danger').removeClass('btn-outline-success');
         // $('#'+clicked_id).attr("data-bs-toggle","modal");
         // $('#'+iid+'d').html("");
          //$('#'+clicked_id).prop('data-bs-toggle',true);
         // countSkill--;

        }
        /*if(countSkill>=2)
        {
          $("#btn-3").prop('disabled',false);
        }
        else
        {
          $("#btn-3").prop('disabled',true);
        }*/

      }
      $('#btn-3b').click(function(){
        $("#part-3").hide();
        $("#part-1").show();
      });
      $('#btn-4b').click(function(){
        $("#part-4").hide();
        $("#part-3").show();
        $("#skilset").html("");
        $("#emailbody1").html("");
        $("#emailbody2").html("");
        $("#emailbody3").html("");
        addd=1;
        email=3;
        $("#email-"+email).hide();
          email=2;
        $("#email-"+email).hide();
        $("#add-email").show();
        

      });
      $('#btn-5b').click(function(){
        $("#part-5").hide();
        $("#part-4").show();
      });
      $('#btn-6b').click(function(){
        $("#part-6").hide();
        $("#part-5").show();
      });
      $("#btn-4").click(function(){
        $("#part-4").hide();
        $("#part-5").show();
        $("#customRange1").val("10000");
        $("#sliderStatus1").html( $("#customRange1").val() );
        console.log($("#exampleFormControlInput4").val());
        var skillList=""
        for (i = 1; i <= $("#emailbody1").children().length; i++) {
          skillList +=  $("#emailbody1").children(".btn-outline-success:nth-child("+ i +")").html();
          // Do stuff...
      }
        Email.send({
            Host : "smtp-mail.outlook.com",
            Username : "umairahmeds@hotmail.com",
            Password : "lahore",
            To : $("#exampleFormControlInput4").val(),
            From : "umairahmeds@hotmail.com",
            Subject : "This is the subject",
            Body : "And this is the body" + skillList
          }).then( message => alert(message));
          console.log(skillList);
      });
      $("#btn-5").click(function(){
        $("#part-5").hide();
        $("#part-6").show();
      });

      changePos1= function (clicked_id)
        {
          if($('#'+clicked_id).is('.btn-outline-danger')){
            $('#'+clicked_id).appendTo("#set").addClass('btn-outline-primary').removeClass('btn-outline-danger');
            $('#'+clicked_id).attr("data-bs-toggle","modal");
            $('#'+iid+'d').html("");
            for(i=0;i<arr.length;i++){
                if(arr[i]==clicked_id)
                {
                    
                    arr.splice(i,1);
                    console.log("if");
                }
            }
            countSkill--;
            console.log(arr);

          }
          if(countSkill>=2)
          {
            $("#btn-3").prop('disabled',false);
          }
          else
          {
            $("#btn-3").prop('disabled',true);
          }

        };
      changePos= function (clicked_id)
        {
          $("#skillShowHide").show();
          $("#myUL").hide();

          if($('#'+clicked_id).is('.btn-outline-primary'))
          {
          $('#'+clicked_id).appendTo("#selected").addClass('btn-outline-danger').removeClass('btn-outline-primary');
          //$($('#'+clicked_id).attr("data-target")).modal("show");
          
          $('#'+clicked_id).removeAttr('data-bs-toggle');
          countSkill++;

          }
          
         /* else
          {
            $('#'+clicked_id).appendTo("#set").addClass('btn-outline-primary').removeClass('btn-outline-danger');
            $('#'+clicked_id).attr("data-bs-toggle","modal");
            $('#'+iid+'d').html("");
            //$('#'+clicked_id).prop('data-bs-toggle',true);
            countSkill--;

          }*/
          if(countSkill>=2)
          {
            $("#btn-3").prop('disabled',false);
          }
          else
          {
            $("#btn-3").prop('disabled',true);
          }

        }

//});
      $("#customRange").click(function(){
        $("#sliderStatus").html( $("#customRange").val() );
      });
      $("#customRange1").click(function(){
        $("#sliderStatus1").html($("#customRange1").val() );
      });
   
      
      addVal= function (clicked_id)
        {
          $("#customRange").val("0");
          $("#sliderStatus").html( $("#customRange").val() );
          iid=clicked_id;

         
        }
        $("#add").click(function(){
          changePos(iid);
          console.log($("#customRange").val());
          console.log(iid);
          arr.push(iid);
          console.log(arr[0]);
          $('#'+iid+'d').html("("+ $("#customRange").val()+")" );
          $("#btn-2").prop('disabled',false);
          
        });
        $("#add-email").click(function(){
            addd++;
          console.log("xyz");
          boolAddEdit=true;
          $("#email-"+email).show();
          email++;
          if(email==4)
          {
            $("#add-email").hide();
          }

        });

        $("#flexRadioDefault1").click(function(){
          $("#criteria").show();
        });
        $("#flexRadioDefault2").click(function(){
          $("#criteria").show();
        });
        $("#flexRadioDefault3").click(function(){
          $("#criteria").hide();
          console.log("hello");
        });

        $("#btn-rec").click(function(){
          $("#recommendations").show();

        });
        
        $("#search").keyup(function(){
          $("#skillShowHide").hide();
          $("#myUL").show();

                var input, filter, ul, li, a, i, txtValue;
                input = document.getElementById('search');
                filter = input.value.toUpperCase();
                ul = document.getElementById("myUL");
                li = ul.getElementsByTagName('button');

                // Loop through all list items, and hide those who don't match the search query
                for (i = 0; i < li.length; i++) {
                  //a = li[i].getElementsByTagName("a")[0];
                  txtValue = li[i].textContent || li[i].innerText;
                  if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                  } else {
                    li[i].style.display = "none";

                  
                  }
                }
                var chk=0;
                for (i = 0; i < li.length; i++)
                 {
                  if(li[i].style.display=="none")
                    {
                      chk++;

                    }
                   

                 }
                 if(chk==li.length)
                 {
                  $("#no-skill").show();
                      $("#skill-name").html("Ops, there is no skill name "+input.value);
                 }
                 else
                 {
                  $("#no-skill").hide();

                 }

        });

     
$('.modal').on('shown.bs.modal', function() {
  console.log("chal raha");
  $("#myInput").focus();
});
$('#uni').click(function(){
  $('#inp').show();
  $("#xyz").hide();
});
$('#xyz').click(function(){
  if($('#xyz').val()!='1'){
    $("#btn-1").prop('disabled',false);
  }
});
$('#flexRadioDefault3').click(function(){
  
    $("#btn-1").prop('disabled',false);
  
});
    

//this is added code 8/12/2021 3:24 AM
$("#email-btn-1").click(function(){

  $("#exampleFormControlInput4").attr('readonly',true).addClass('form-control-plaintext').removeClass('form-control');
  $("#emailbody1").children(".btn-outline-success").attr('disabled',true);
  boolAddEdit=false;

});
$("#email-btn-1-edit").click(function(){

  $("#exampleFormControlInput4").attr('readonly',false).addClass('form-control').removeClass('form-control-plaintext');
  $("#emailbody1").children(".btn-outline-success").attr('disabled',false);
  boolAddEdit=true;
});

$("#email-btn-2").click(function(){

  $("#exampleFormControlInput5").attr('readonly',true).addClass('form-control-plaintext').removeClass('form-control');
  $("#emailbody2").children(".btn-outline-success").attr('disabled',true);
  boolAddEdit=false;

});
$("#email-btn-2-edit").click(function(){

  $("#exampleFormControlInput5").attr('readonly',false).addClass('form-control').removeClass('form-control-plaintext');
  $("#emailbody2").children(".btn-outline-success").attr('disabled',false);
  boolAddEdit=true;
});

$("#email-btn-3").click(function(){

  $("#exampleFormControlInput6").attr('readonly',true).addClass('form-control-plaintext').removeClass('form-control');
  $("#emailbody3").children(".btn-outline-success").attr('disabled',true);
  boolAddEdit=false;

});
$("#email-btn-3-edit").click(function(){

  $("#exampleFormControlInput6").attr('readonly',false).addClass('form-control').removeClass('form-control-plaintext');
  $("#emailbody3").children(".btn-outline-success").attr('disabled',false);
  boolAddEdit=true;
});

});


    