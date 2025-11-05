%{
    #include <stdio.h>
    #include <string.h>

    extern FILE *yyin;

    int capital = 0, small = 0, digit = 0, special = 0;
    int lines = 0, words = 0, spaces = 0;
    int comments = 0, keywords = 0, identifiers = 0;

    int total_chars = 0;
    int whitespaces = 0;
    int tabs = 0;
    int total_tokens = 0;

    int isKeyword(char* word) {
        if (strcmp(word, "int") == 0 || strcmp(word, "float") == 0 ||
            strcmp(word, "char") == 0 || strcmp(word, "double") == 0 ||
            strcmp(word, "if") == 0 || strcmp(word, "else") == 0 ||
            strcmp(word, "for") == 0 || strcmp(word, "while") == 0 ||
            strcmp(word, "return") == 0 || strcmp(word, "void") == 0) {
            return 1;
        }
        return 0;
    }
%}

%%

"/*"([^*]|(\*+[^*/]))*"*/" {
    total_tokens++;
    comments++;
    total_chars += yyleng;
}

"//".* {
    total_tokens++;
    comments++;
    total_chars += yyleng;
}

[a-zA-Z_][a-zA-Z0-9_]* {
    total_tokens++;
    total_chars += yyleng;
    words++;
    int len = strlen(yytext);
    for (int i = 0; i < len; i++) {
        if (yytext[i] >= 'A' && yytext[i] <= 'Z') capital++;
        else if (yytext[i] >= 'a' && yytext[i] <= 'z') small++;
    }
    if (isKeyword(yytext)) keywords++;
    else identifiers++;
}

[0-9]+ {
    total_tokens++;
    total_chars += yyleng;
    digit += yyleng;
    words++;  // whole number is one word
}

[ \t]+ {
    total_tokens++;
    spaces++;
    whitespaces += yyleng;
    total_chars += yyleng;
    for (int i = 0; i < yyleng; i++) {
        if (yytext[i] == '\t') tabs++;
    }
}

\n {
    total_tokens++;
    lines++;
    whitespaces++;
    total_chars++;
}

. {
    total_tokens++;
    special++;
    total_chars += yyleng;
}

%%

int main(int argc, char** argv) {
    yyin = fopen(argv[1], "r");

    yylex();

    printf("\n=== Analysis Results ===\n");
    printf("Total chars: %d\n", total_chars);
    printf("White spaces (spaces+tabs+newlines): %d\n", whitespaces);
    printf("Tabs: %d\n", tabs);
    printf("Capital letters: %d\n", capital);
    printf("Small letters: %d\n", small);
    printf("Digits: %d\n", digit);
    printf("Special chars: %d\n", special);
    printf("Lines: %d\n", lines);
    printf("Words: %d\n", words);
    printf("Spaces: %d\n", spaces);
    printf("Comments: %d\n", comments);
    printf("Keywords: %d\n", keywords);
    printf("Identifiers: %d\n", identifiers);
    printf("Tokens: %d\n",total_tokens);
	fclose(yyin);
	return 0;
}

int yywrap() {
    return 1;
}




%{
    #include <stdio.h>
    #include <string.h>
	extern FILE *yyin;
    char target_word[100];
    int count = 0;

    int isTarget(char* word) {
        return strcmp(word, target_word) == 0;
    }
%}

%%
[a-zA-Z_][a-zA-Z0-9_]* {
    if (isTarget(yytext)) {
        count++;
    }
}
.|\n  ;   // ignore all other characters
	
%%

int main(int argc, char **argv) {
    strcpy(target_word, argv[1]);

    yyin = fopen(argv[2], "r");
    
    yylex();

    printf("Frequency of '%s': %d\n", target_word, count);

    fclose(yyin);
    return 0;
}

int yywrap() {
    return 1;
}



%{
#include<stdio.h>
#include<string.h>
int count=0;
%}

%%
[aA]([a-zA-Z]*[aA]) {
	printf("Word matched: %s\n",yytext);
	count++;
}
[a-zA-Z]+

[ \t\n]+

%%

int main(){
	yylex();
	printf("Words starting and ending with 'a' or 'A': %d\n",count);
	return 0;
}

int yywrap(){
	return 1;
}



%{
#include <stdio.h>
#include <ctype.h>
%}
%%
[A-Z] { printf("%c", tolower(yytext[0])); }
[a-z] { printf("%c", toupper(yytext[0])); }
. { printf("%c", yytext[0]); }
%%
int main(int argc, char *argv[]) {
FILE *fp;
fp = fopen(argv[1], "r");
yyin = fp;
yylex();
fclose(fp);
return 0;
}
int yywrap() {
return 1;
}



%{
#include <stdio.h>
#include <stdlib.h>
%}
DIGIT [0-9]+
%%
{DIGIT} {
 int decimal = atoi(yytext);
 printf("Decimal: %s\t Hexadecimal: %X\n", yytext, decimal);
 }
[ \t\n]+ ;
. { printf("Invalid character: %s\n", yytext); }
%%
int main(int argc, char *argv[]) {
 FILE *fp = fopen(argv[1], "r");
 yyin = fp;
 }
 yylex();
 return 0;
}



%{
#include <stdio.h>
#include <stdlib.h>
%}
HEXNUM [0-9a-fA-F]+
%%
{HEXNUM} {
 long decimal = strtol(yytext, NULL, 16);
 printf("Hexadecimal: %s\tDecimal: %ld\n", yytext, decimal);
}
[ \t\n]+ ;
. ;
%%
int main(int argc, char *argv[]) {

 FILE *fp = fopen(argv[1], "r");
 yyin = fp;

 yylex();
 return 0;
}
int yywrap(){
return 0;
}



%{
#include<stdio.h>
int count=0;
extern FILE *yyin;
%}
DIGIT [0-9]
ALPHA [a-zA-Z]
WORD ({ALPHA}|{DIGIT})+
%%
{WORD}*com { count++; }
[ \t\n]+ ;
. ; 
%%

int main(int argc, char* argv[])
{
    FILE *fp = fopen(argv[1], "r");
    yyin = fp;
    yylex();
    printf("Count = %d\n", count);
    return 0;
}



%{
#include <stdio.h>
#include <stdlib.h>
extern FILE *yyin;
void printBinary(int n){
    if(n==0){ printf("0 "); return; }
    int bin[32], i=0;
    while(n>0){ bin[i++] = n%2; n/=2; }
    for(int j=i-1;j>=0;j--) printf("%d", bin[j]);
    printf(" ");
}
%}

%%
[0-9]+ {
          int n = atoi(yytext);
          printBinary(n);
       }
[ \t\n]+ ;
. ;
%%

int main(int argc, char *argv[]) {
 FILE *fp=fopen(argv[1],"r");
 yyin=fp;
 yylex();
 return 0;
}
int yywrap(void) {
    return 1; // or 0, depending on your setup
}



%{
#include <stdio.h>
%}

%%
[a-zA-Z0-9_.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,} { printf("%s : Valid Email Address\n", yytext); }
[^\n]+ { printf("%s : Invalid Email Address\n", yytext); }
%%

int main(int argc, char *argv[]) {
FILE *fp = fopen(argv[1], "r");
yyin = fp;
yylex();
fclose(fp);
return 0;
}
int yywrap() {
return 1;
}



%{
#include <stdio.h>
int a, b;
char op;
%}

%%

[0-9]+[+\-*/][0-9]+ { sscanf(yytext, "%d %c %d", &a, &op, &b);
		      switch(op) {
                        case '+': printf("= %d\n", a + b); break;
                        case '-': printf("= %d\n", a - b); break;
                        case '*': printf("= %d\n", a * b); break;
                        case '/': 
                          if(b == 0) printf("Error: Divide by zero\n");
                          else printf("= %d\n", a / b); 
                             break;
                          }
                    }

\n { }   /* ignore newline */
.  { }   /* ignore other characters */

%%
int main(){
yylex();
return 0;
}
int yywrap() { return 1; }



%{
#include "y.tab.h"
#include<stdlib.h>
%}

%%

[0-9]+ {yylval=atoi(yytext); return num;}
\n {return '\n';}
[ \t] ;
. {return yytext[0];}

%%

%{
#include<stdio.h>
#include<stdlib.h>
int yylex(void);
void yyerror(char *s);
%}

%token num
%left '+' '-' 
%left '*' '/'

%%
line: expr '\n' {printf("Result = %d\n",$1); return 0;};

expr: expr expr '+' {$$ = $1 + $2;} | expr expr '-' {$$ = $1 - $2;} | expr expr '*' {$$ = $1 * $2;}
	| expr expr '/' {$$ = $1 / $2;} | '(' expr ')' { $$ = $2; } | num {$$ = $1};
%%
int main(void){
printf("Expression: \n");
yyparse();
return 0;
}
void yyerror(char *s) {
    fprintf(stderr, "Error: %s\n", s);
}

int yywrap(void) {
    return 1;
}



%{
#include "y.tab.h"
#include<stdlib.h>
%}

%%

[0-9]+ {yylval=atoi(yytext); return id;}
\n {return '\n';}
[ \t] ;
. {return yytext[0];}

%%

%{
#include <stdio.h>
#include <stdlib.h>

int yylex(void);
void yyerror(char *s);
%}

%token id
%left '+' '-'
%left '*' '/'

%%
line: expr '\n' { printf("\n"); };
expr: expr '+' expr { printf("+ "); }
    | expr '-' expr { printf("- "); }
    | expr '*' expr { printf("* "); }
    | expr '/' expr { printf("/ "); }
    | '(' expr ')'  { /* do nothing for parentheses */ }
    | id            { printf("%d ", $1); }
    ;
%%

int main(void) {
    printf("Expression: \n");
    yyparse();
    return 0;
}

void yyerror(char *s) {
    fprintf(stderr, "Error: %s\n", s);
}

int yywrap(void) {
    return 1;
}



%{
#include "y.tab.h"
#include<stdlib.h>
%}

%%

[0-9]+ {yylval=atoi(yytext); return id;}
\n {return '\n';}
[ \t] ;
. {return yytext[0];}

%%

%{
#include <stdio.h>
#include <stdlib.h>

int yylex(void);
void yyerror(char *s);
%}

%token id
%left '+' '-'
%left '*' '/'

%%
lines: lines line | ;
line: expr '\n' { printf("Result = %d\n",$1); };
expr: expr '+' expr { $$=$1+$3; }
    | expr '-' expr { $$=$1-$3; }
    | expr '*' expr { $$=$1*$3; }
    | expr '/' expr { $$=$1/$3; }
    | '(' expr ')'  { $$=$2; }
    | id 
    ;
%%

int main(void) {
    printf("Expression: \n");
    yyparse();
    return 0;
}

void yyerror(char *s) {
    fprintf(stderr, "Error: %s\n", s);
}

int yywrap(void) {
    return 1;
}



%{
#include "y.tab.h"
#include <stdlib.h>
%}
%%
"for" { return FOR; }
"(" { return LPAREN; }
")" { return RPAREN; }
";" { return SEMI; }
"=" { return ASSIGN; }
"<" { return RELOP; }
[0-9]+ { yylval = atoi(yytext); return NUM; }
[a-zA-Z_][a-zA-Z0-9_]* { return ID; }
[ \t\n] ;
. { return yytext[0]; }
%%
int yywrap() { return 1; }

%{
#include <stdio.h>
#include <stdlib.h>
int yylex(void);
int yyerror(const char *s);
%}
%token FOR LPAREN RPAREN SEMI ASSIGN RELOP NUM ID
%%
S : FOR LPAREN init SEMI cond SEMI incr RPAREN
{ printf("Valid FOR loop syntax\n"); }
;
init : ID ASSIGN NUM ;
cond : ID RELOP NUM ;
incr : ID ASSIGN ID
| ID ASSIGN NUM
;
%%
int main() {
printf("Enter FOR loop statement:\n");
return yyparse();
}
int yyerror(const char *s) {
printf("Invalid syntax: %s\n", s);
return 0;
}




%{
#include "y.tab.h"
#include <string.h>
#include <stdlib.h>
%}
%%
[ \t\n]+ ;
[0-9]+ { yylval.sval = strdup(yytext); return NUMBER; }
[a-zA-Z_][a-zA-Z0-9_]* { yylval.sval = strdup(yytext); return ID; }
"+" { return PLUS; }
"-" { return MINUS; }
"*" { return MUL; }
"/" { return DIV; }
";" { return SEMI; }
. { return yytext[0]; }
%%
int yywrap(void) { return 1; }


%{
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int yylex(void);
void yyerror(const char *s) { fprintf(stderr, "Error: %s\n", s); }

static int tempno = 0;

char *newtemp() {
  char buf[32];
  snprintf(buf, sizeof(buf), "t%d", ++tempno);
  return strdup(buf);
}
%}

%union {
  char *sval;
}

%token <sval> NUMBER ID
%token PLUS MINUS MUL DIV SEMI

%left PLUS MINUS
%left MUL DIV

%type <sval> expr

%%
program:
  stmt_list
  ;

stmt_list:
  /* empty */
  | stmt_list stmt
  ;

stmt:
  expr SEMI { free($1); }
  ;

expr:
  NUMBER { $$ = $1; }
  | ID { $$ = $1; }
  | expr PLUS expr {
      char *t = newtemp();
      printf("%s = %s + %s\n", t, $1, $3);
      free($1); free($3);
      $$ = t;
    }
  | expr MINUS expr {
      char *t = newtemp();
      printf("%s = %s - %s\n", t, $1, $3);
      free($1); free($3);
      $$ = t;
    }
  | expr MUL expr {
      char *t = newtemp();
      printf("%s = %s * %s\n", t, $1, $3);
      free($1); free($3);
      $$ = t;
    }
  | expr DIV expr {
      char *t = newtemp();
      printf("%s = %s / %s\n", t, $1, $3);
      free($1); free($3);
      $$ = t;
    }
  | '(' expr ')' { $$ = $2; }
  ;

%%

int main(void) {
  yyparse();
  return 0;
}



