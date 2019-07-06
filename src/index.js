module.exports = function solveSudoku(matrix) {
  // your solution
var cars = new Array;
var matrix=new Array;
var i=0;
var x=0;
var y=0;
var check;
var num1=-1;
var num2;
var check1 = new Array();
  for (y=0; y<9;y++)
    {
	for (i=0; i<9; i++)
      {	   	
      cars[i]=matrix[i][y];
      }      
    check=0;
	for (x=0; i<9; i++)
		{
    	check1[i]=cars[i];
    	if (cars[i]==0)
    		{
        	check++;
            num1=i;
        	};
		};
	check1=check1.sort();
	for (x=0; i<9; i++)
		{
		if (check1[i] != (i+1))
    		{
  			num2=i+1;  
    		};
		};
	if (check ==1)
		{
		matrix[i][num1]=num2;
		}
	};  
 return matrix;
};
