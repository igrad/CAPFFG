const RuleAccessModifierOffset = {
  version: 3.3,
  type: null,
  title: 'Access Modifier Offset',
  desc: 'The extra indent or outdent of access modifiers, e.g. `public:`.'
}

const RuleAlignAfterOpenBracket = {
  version: 3.8,
  title: 'Align After Open Bracket',
  desc: 'If true, horizontally aligns arguments after an open bracket.' +
    'This applies to round brackets (parentheses), angle brackets, and square ' +
    'brackets.',
  note: 'This currently only applies to braced initializer lists (when ' +
    '`Cpp11BracedListStyle` is `true`) and parentheses.',
  options: [
    {
      title: 'BAS_Align',
      config: 'Align',
      desc: 'Align parameters on the open bracket',
      codeSnippet:
        'someLongFunction(argument1,\n' +
        '                 argument2);'
    },
    {
      title: 'BAS_DontAlign',
      config: 'DontAlign',
      desc: "Don't align, instead use `ContinuationIndentWidth`",
      codeSnippet:
        'someLongFunction(argument1,\n' +
        '    argument2);'
    },
    {
      title: 'BAS_AlwaysBreak',
      config: 'AlwaysBreak',
      desc: "Always break after an open bracket, if the parameters don't " +
        'fit on a single line',
      codeSnippet:
        'someLongFunction(\n' +
        '    argument1, argument2);'
    },
    {
      title: 'BAS_BlockIndent',
      config: 'BlockIndent',
      desc: "Always break after an open bracket, if the parameters don't " +
        'fit on a single line. Closing brackets will be placed on a new line.',
      codeSnippet:
        'someLongFunction(\n' +
        '   argument1, argument2\n' +
        ');'
    }
  ]
}

const RuleAlignArrayOfStructures = {
  version: 13,
  title: 'Align Array of Structures',
  desc: 'If not `None`, when using initialization for an array of structs ' +
    'align the fields into columns.',
  note: 'As of clang-format 15 this option only applied to array with equal ' +
    'number of columns per row.',
  options: [
    {
      title: 'AIAS_Left',
      config: 'Left',
      desc: 'Align array column and left justify the columns',
      codeSnippet:
        'struct test demo[] = \n' +
        '{\n' +
        '  {56, 23,    "hello"},\n' +
        '  {-1, 93463, "world"},\n' +
        '  {7,  5,     "!!"   }\n' +
        '}'
    },
    {
      title: 'AIAS_Right',
      config: 'Right',
      desc: 'Align array column and right justify the columns',
      codeSnippet:
        'struct test demo[] = \n' +
        '{\n' +
        '  {56,    23, "hello"},\n' +
        '  {-1, 93463, "world"},\n' +
        '  { 7,     5,    "!!"}\n' +
        '}'
    },
    {
      title: 'AIAS_None',
      config: 'None',
      desc: 'Don\'t align array initializer columns'
    }
  ]
}

const RuleAlignConsecutiveAssignments = {
  version: 3.8,
  type: null,
  title: 'Align Consecutive Assignments',
  desc: 'Style of aligning consecutive assignments.',
  subRules: [
    {
      title: 'Enabled',
      desc: 'Whether aligning is enabled.',
      codeSnippet:
        '#define SHORT_NAME       42\n' +
        '#define LONGER_NAME      0x007F\n' +
        '#define EVEN_LONGER_NAME (2)\n' +
        '#define foo(x)           (x * x)\n' +
        '#define bar(y, z)        (y + z)\n' +
        '\n' +
        'int a            = 1;\n' +
        'int somelongname = 2;\n' +
        'double c         = 3;\n' +
        '\n' +
        'int aaaa : 1;\n' +
        'int b    : 12;\n' +
        'int ccc  : 8;\n' +
        '\n' +
        'int         aaaa = 12;\n' +
        'float       b = 23;\n' +
        'std::string ccc;',
      options: [
        {
          title: 'true',
          desc: 'Consecutive Assignment Aligment is enabled'
        },
        {
          title: 'false',
          desc: 'Consecutive Assignment Aligment is disabled'
        }
      ]
    },
    {
      type: typeof (bool),
      title: 'AcrossEmptyLines',
      desc: 'Whether to align across empty lines',
      codeSnippet:
        'true:\n' +
        'int a = 1\n' +
        'int somelongname = 2;\n' +
        'double c         = 3;\n' +
        '\n' +
        'int d            = 3;\n' +
        '\n' +
        'false:\n' +
        'int a            = 1;\n' +
        'int somelongbane = 2;\n' +
        'double c         = 3;\n' +
        '\n' +
        'int d = 3;\n'
    },
    {
      type: typeof (bool),
      title: 'AcrossComments',
      desc: 'Whether to align across comments',
      codeSnippet:
        'true:\n' +
        'int d    = 3;\n' +
        '/* A comment. */\n' +
        'double e = 4;\n' +
        '\n' +
        'false:\n' +
        'int d = 3;\n' +
        '/* A comment. */\n' +
        'double e = 4;\n'
    },
    {
      type: typeof (bool),
      title: 'AlignCompound',
      desc: 'Only for `AlignConsecutiveAssignments`. Whether compound ' +
        'assignments like `+=` are aligned along with `=`.',
      codeSnippet:
        'true:\n' +
        'a   &= 2;\n' +
        'bbb  = 2;\n' +
        '\n' +
        'false:\n' +
        'a &= 2;\n' +
        'bbb = 2;'
    },
    {
      type: typeof (bool),
      title: 'AlignFunctionDeclarations',
      desc: 'Only for `AlignConsecutiveDeclarations`. Whether function ' +
        'declarations are aligned.',
      codeSnippet:
        'true:\n' +
        'unsigned int f1(void);\n' +
        'void         f2(void);\n' +
        'size_t       f3(void);\n' +
        '\n' +
        'false:\n' +
        'unsigned int f1(void);\n' +
        'void f2(void);\n' +
        'size_t f3(void);'
    },
    {
      type: typeof (bool),
      title: 'AlignFunctionPointers',
      desc: 'Only for `AlignConsecutiveDeclarations`. Whether function ' +
        'pointers are aligned.',
      codeSnippet:
        'true:\n' +
        'unsigned i;\n' +
        'int     &r;\n' +
        'int     *p;\n' +
        'int      (*f)();\n' +
        '\n' +
        'false:\n' +
        'unsigned i;\n' +
        'int     &r;\n' +
        'int     *p;\n' +
        'int (*f)();'
    },
    {
      type: typeof (bool),
      title: 'PadOperators',
      desc: 'Only for `AlignConsecutiveAssignments`. Whether short ' +
        'assignment operators are left-padded to the same length as long ' +
        'ones in order to put all assignment operators to the right of the ' +
        'left hand side.',
      codeSnippet:
        'true:\n' +
        'a   >>= 2;\n' +
        'bbb   = 2;\n' +
        '\n' +
        'a     = 2;\n' +
        'bbb >>= 2;\n' +
        '\n' +
        'false:\n' +
        'a >>= 2;\n' +
        'bbb = 2;\n' +
        '\n' +
        'a     = 2;\n' +
        'bbb >>= 2;'
    }
  ]
}

const Rule = {
  version: 0,
  type: null,
  title: '',
  desc: '',
  note: '',
  subRules: [
    {
      type: null,
      title: '',
      desc: '',
      codeSnippet:
        '',
      options: [
        {
          title: '',
          config: '',
          desc: '',
          codeSnippet:
            ''
        }
      ]
    }
  ],
  options: [
    {
      type: null,
      title: '',
      config: '',
      desc: '',
      codeSnippet:
        ''
    }
  ]
}
