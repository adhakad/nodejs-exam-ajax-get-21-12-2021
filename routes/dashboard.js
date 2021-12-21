var express = require('express');
var router = express.Router();
var classModule=require('../modules/class');
var examResultModule=require('../modules/examResult');
var questionModule=require('../modules/questions');
var optionModule=require('../modules/options');
var answerModule=require('../modules/answer');
const { check, validationResult, matchedData } = require('express-validator');
router.use(express.static('public'))

var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.get('/',function(req, res) {
  var check=classModule.find({});
      check.exec((err, data)=>{      
        res.render('dashboard', { title: 'TechBista Solutions',data:data});
      });
});

router.get('/get/:ids',function(req, res) {
  req.session.eid = req.params.ids;
  res.send({msg:'/exam'});
});

router.get('/exam',function(req, res) {
      var eid = req.session.eid;
      var check=classModule.findOne({eid:eid});
      check.exec((err, data)=>{ 
        req.session.total = data.total;
        res.render('exam', { title: 'TechBista Solutions',data:data});
      });
});

router.get('/data/:sn',function(req, res, next) {
  var sn = req.params.sn;
  var eid =req.session.eid;
  var total = req.session.total;
  var que=questionModule.findOne({eid:eid,sn:sn});
  que.exec((err,data)=>{
    var qns = data.qns;
    var one = 1;var two = 2;var three = 3;var four = 4;
    var option1 = optionModule.findOne({eid:eid,sn:sn,ans_sn:one});
    option1.exec((err,optData1)=>{
      var option2 = optionModule.findOne({eid:eid,sn:sn,ans_sn:two});
      option2.exec((err,optData2)=>{
        var option3 = optionModule.findOne({eid:eid,sn:sn,ans_sn:three});
        option3.exec((err,optData3)=>{
          var option4 = optionModule.findOne({eid:eid,sn:sn,ans_sn:four});
          option4.exec((err,optData4)=>{
            if(err){
              res.send({msg:'error'});
            }else{
              var opt1 = optData1.option;var ans_sn1 = optData1.ans_sn;
              var opt2 = optData2.option;var ans_sn2 = optData2.ans_sn;
              var opt3 = optData3.option;var ans_sn3 = optData3.ans_sn;
              var opt4 = optData4.option;var ans_sn4 = optData4.ans_sn;
              var examResults = examResultModule.findOne({eid:eid,sn:sn});
              examResults.exec((err,exmData)=>{
                if(exmData==null){
                  res.send({msg:'success',sn:sn,qns:qns,opt1:opt1,opt2:opt2,opt3:opt3,opt4:opt4,ans_sn1:ans_sn1,ans_sn2:ans_sn2,ans_sn3:ans_sn3,ans_sn4:ans_sn4,radioAns:1234567890,total:total});
                }else{
                  var radioAns = exmData.select_ans_sn;
                  res.send({msg:'success',sn:sn,qns:qns,opt1:opt1,opt2:opt2,opt3:opt3,opt4:opt4,ans_sn1:ans_sn1,ans_sn2:ans_sn2,ans_sn3:ans_sn3,ans_sn4:ans_sn4,radioAns:radioAns,total:total});
                }
              })            
            }         
          })        
        })
      })
    })          
  });  
});

router.get('/datas/:sn',function(req, res, next) {
  var sn = req.params.sn;
  var eid =req.session.eid;
  var total = req.session.total;
  var que=questionModule.findOne({eid:eid,sn:sn});
  que.exec((err,data)=>{
    var qns = data.qns;
    var one = 1;var two = 2;var three = 3;var four = 4;
    var option1 = optionModule.findOne({eid:eid,sn:sn,ans_sn:one});
    option1.exec((err,optData1)=>{
      var option2 = optionModule.findOne({eid:eid,sn:sn,ans_sn:two});
      option2.exec((err,optData2)=>{
        var option3 = optionModule.findOne({eid:eid,sn:sn,ans_sn:three});
        option3.exec((err,optData3)=>{
          var option4 = optionModule.findOne({eid:eid,sn:sn,ans_sn:four});
          option4.exec((err,optData4)=>{
            if(err){
              res.send({msg:'error'});
            }else{
              var opt1 = optData1.option;var ans_sn1 = optData1.ans_sn;
              var opt2 = optData2.option;var ans_sn2 = optData2.ans_sn;
              var opt3 = optData3.option;var ans_sn3 = optData3.ans_sn;
              var opt4 = optData4.option;var ans_sn4 = optData4.ans_sn;
              var examResults = examResultModule.findOne({eid:eid,sn:sn});
              examResults.exec((err,exmData)=>{
                if(exmData==null){
                  res.send({msg:'yes',sn:sn,qns:qns,opt1:opt1,opt2:opt2,opt3:opt3,opt4:opt4,ans_sn1:ans_sn1,ans_sn2:ans_sn2,ans_sn3:ans_sn3,ans_sn4:ans_sn4,radioAns:1234567890,total:total});
                }else{
                  var radioAns = exmData.select_ans_sn;
                  res.send({msg:'yes',sn:sn,qns:qns,opt1:opt1,opt2:opt2,opt3:opt3,opt4:opt4,ans_sn1:ans_sn1,ans_sn2:ans_sn2,ans_sn3:ans_sn3,ans_sn4:ans_sn4,radioAns:radioAns,total:total});
                }
              })            
            }         
          })        
        })
      })
    })          
  }); 
});

router.get('/datass/:snn',function(req, res, next) { 
  var sn = req.params.snn;
  var eid =req.session.eid;
  var total = req.session.total;
  var que=questionModule.findOne({eid:eid,sn:sn});
  que.exec((err,data)=>{
    var qns = data.qns;
    var one = 1;var two = 2;var three = 3;var four = 4;
    var option1 = optionModule.findOne({eid:eid,sn:sn,ans_sn:one});
    option1.exec((err,optData1)=>{
      var option2 = optionModule.findOne({eid:eid,sn:sn,ans_sn:two});
      option2.exec((err,optData2)=>{
        var option3 = optionModule.findOne({eid:eid,sn:sn,ans_sn:three});
        option3.exec((err,optData3)=>{
          var option4 = optionModule.findOne({eid:eid,sn:sn,ans_sn:four});
          option4.exec((err,optData4)=>{
            if(err){
              res.send({msg:'error'});
            }else{
              var opt1 = optData1.option;var ans_sn1 = optData1.ans_sn;
              var opt2 = optData2.option;var ans_sn2 = optData2.ans_sn;
              var opt3 = optData3.option;var ans_sn3 = optData3.ans_sn;
              var opt4 = optData4.option;var ans_sn4 = optData4.ans_sn;
              var examResults = examResultModule.findOne({eid:eid,sn:sn});
              examResults.exec((err,exmData)=>{
                if(exmData==null){
                  res.send({msg:'yess',sn:sn,qns:qns,opt1:opt1,opt2:opt2,opt3:opt3,opt4:opt4,ans_sn1:ans_sn1,ans_sn2:ans_sn2,ans_sn3:ans_sn3,ans_sn4:ans_sn4,radioAns:1234567890,total:total});
                }else{
                  var radioAns = exmData.select_ans_sn;
                  res.send({msg:'yess',sn:sn,qns:qns,opt1:opt1,opt2:opt2,opt3:opt3,opt4:opt4,ans_sn1:ans_sn1,ans_sn2:ans_sn2,ans_sn3:ans_sn3,ans_sn4:ans_sn4,radioAns:radioAns,total:total});
                }
              })
            }         
          })        
        })
      })
    })          
  }); 
});

      router.post('/exam/opt',function(req, res, next) {
        var select_ans_sn = req.body.slt_opt;
        var sn = req.body.slt_qsn;
        var eid =req.session.eid;

        var right_ans;

        var answerDetail = answerModule.findOne({eid:eid,sn:sn});
        answerDetail.exec((err,ansData)=>{
          var ans_sn = ansData.ans_sn;
          var examResults = examResultModule.findOne({eid:eid,sn:sn});
          examResults.exec((err,exmData)=>{
            if(ans_sn==select_ans_sn){
              right_ans=1;
            }else{
              right_ans=12345;
            }
            if(exmData==null){
              var examResultDetail=new examResultModule({
                eid:eid,
                sn:sn,
                ans_sn:ans_sn,
                select_ans_sn:select_ans_sn,
                right_ans:right_ans,
              }); 
              examResultDetail.save((err)=>{
                if(err) throw err; 
                res.send({msg:'success'});   
              });
            }else{
              var ObjectiId = exmData._id;
              var exmResultUdt=examResultModule.findByIdAndUpdate(ObjectiId,{select_ans_sn:select_ans_sn,right_ans:right_ans});
              exmResultUdt.exec(function(err){
                res.send({msg:'success'});  
              })
            }
            
          });
        });
      });

      router.post('/exam/exmResult',function(req, res, next) {
        var eid = req.body.eid;
        var examResults = examResultModule.find({eid:eid,right_ans:1});
        examResults.exec((err,exmData)=>{
          var right = exmData.length;
          var a = right;
          var exam = examResultModule.find({eid:eid,right_ans:12345});
          exam.exec((err,exm)=>{
            var wrong_ans = exm.length;
            var b = wrong_ans;
            a+=b;
            res.send({msg:'success',right:right,wrong_ans:wrong_ans,attempted_que:a});
          })
        })     
      });
module.exports = router;