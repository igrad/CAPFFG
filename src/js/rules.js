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

const RuleAlignConsecutiveBitFields = {
  version: 11,
  type: null,
  title: 'Align Consecutive Bit Fields',
  desc: 'Style of aligning consecutive bit fields.',
  note: '',
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

const RuleAlignDeclarations = {
  version: 3.8,
  type: null,
  title: 'Align Consecutive Declarations',
  desc: 'Style of aligning consecutive declarations.',
  note: '',
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

const RuleAlignConsecutiveMacros = {
  version: 9,
  type: null,
  title: 'Align Consecutive Macros',
  desc: 'Style of aligning consecutive macro definitions.',
  note: '',
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

const RuleAlignConsecutiveShortCaseStatements = {
  version: 17,
  type: null,
  title: 'Align Consecutive Short Case Statements',
  desc: 'Style of aligning consecutive short case labels. Only applies if ' +
    '`AllowShortCaseExpressionOnASingleLine` or ' +
    '`AllowShortCaseLabelsOnASingleLine` is `true`.',
  note: '',
  subRules: [
    {
      title: 'Enabled',
      desc: 'Whether aligning is enabled.',
      codeSnippet:
        'true:\n' +
        'switch (level) {\n' +
        'case log::info:    return "info:";\n' +
        'case log::warning: return "warning:";\n' +
        'default:           return "";\n' +
        '\n' +
        'false:\n' +
        'switch (level) {\n' +
        'case log::info: return "info:";\n' +
        'case log::warning: return "warning:";\n' +
        'default: return "";'
    },
    {
      type: typeof (bool),
      title: 'AcrossEmptyLines',
      desc: 'Whether to align across empty lines',
      codeSnippet:
        'true:\n' +
        'switch (level) {\n' +
        'case log::info:    return "info:";\n' +
        'case log::warning: return "warning:";\n' +
        '\n' +
        'default:           return "";\n' +
        '\n' +
        'false:\n' +
        'switch (level) {\n' +
        'case log::info:    return "info:";\n' +
        'case log::warning: return "warning:";\n' +
        '\n' +
        'default: return "";'
    },
    {
      type: typeof (bool),
      title: 'AcrossComments',
      desc: 'Whether to align across comments',
      codeSnippet:
        'true:\n' +
        'switch (level) {\n' +
        'case log::info:    return "info:";\n' +
        'case log::warning: return "warning:";\n' +
        '/* A comment. */\n' +
        'default:           return "";\n' +
        '\n' +
        'false:\n' +
        'switch (level) {\n' +
        'case log::info:    return "info:";\n' +
        'case log::warning: return "warning:";\n' +
        '/* A comment. */\n' +
        'default: return "";'
    },
    {
      type: typeof (bool),
      title: 'AlignCaseArrows',
      desc: 'Whether to align the case arrows when aligning short case ' +
        'expressions.',
      codeSnippet:
        'true:\n' +
        'i = switch (day) {\n' +
        '  case THURSDAY, SATURDAY -> 8;\n' +
        '  case WEDNESDAY          -> 9;\n' +
        '  default                 -> 0;\n' +
        '\n' +
        'false:\n' +
        'i = switch (day) {\n' +
        '  case THURSDAY, SATURDAY -> 8;\n' +
        '  case WEDNESDAY -> 9;\n' +
        '  default -> 0;',
    },
    {
      type: typeof (bool),
      title: 'AlignCaseColons',
      desc: 'Whether aligned case labels are aligned on the colon, or on the ' +
        'tokens after the colon.',
      codeSnippet:
        'true:\n' +
        'switch (level) {\n' +
        'case log::info   : return "info:";\n' +
        'case log::warning: return "warning:";\n' +
        'default          : return "";\n' +
        '}\n' +
        '\n' +
        'false:\n' +
        'switch (level) {\n' +
        'case log::info:    return "info:";\n' +
        'case log::warning: return "warning:";\n' +
        'default:           return "";\n' +
        '}',
    }
  ]
}

const RuleAlignTableGenBreakingDAGArgColons = {
  version: 19,
  type: null,
  title: 'Align Consecutive Table Gen Breaking DAG Arg Colons',
  desc: 'Style of aligning consecutive TableGen DAGArg operator colons. If ' +
    'enabled, align the colon inside DAGArg which have line break inside.  ' +
    'This works only when TableHenBreakInsideDAGArg is BreakElements or ' +
    'BreakAll and the DAGArg is not excepted by ' +
    'TableGenBreakingDAGArgOperators\'s effect.',
  codeSnippet:
    'let dagarg = (ins\n' +
    '    a  :$src1,\n' +
    '    aa :$src2,\n' +
    '    aaa:$src3\n' +
    ')',
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
    },
    {
      type: typeof (bool),
      title: 'AcrossEmptyLines',
      desc: 'Whether to align across empty lines',
      codeSnippet:
        'true:\n' +
        'int a            = 1\n' +
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

const RuleAlignTableGenCondOperatorColons = {
  version: 19,
  type: null,
  title: 'Align Consecutive Table Gen Breaking DAG Arg Colons',
  desc: 'Style of aligning consecutive TableGen DAGArg operator colons. If ' +
    'enabled, align the colon inside DAGArg which have line break inside.  ' +
    'This works only when TableHenBreakInsideDAGArg is BreakElements or ' +
    'BreakAll and the DAGArg is not excepted by ' +
    'TableGenBreakingDAGArgOperators\'s effect.',
  codeSnippet:
    '!cond(!eq(size, 1) : 1,\n' +
    '      !eq(size, 16): 1,\n' +
    '      true         : 0)',
  note: '',
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
    },
    {
      type: typeof (bool),
      title: 'AcrossEmptyLines',
      desc: 'Whether to align across empty lines',
      codeSnippet:
        'true:\n' +
        'int a            = 1\n' +
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

const RuleAlignTableGenDefinitionColons = {
  version: 19,
  type: null,
  title: 'Align Consecutive Table Gen Breaking DAG Arg Colons',
  desc: 'Style of aligning consecutive TableGen DAGArg operator colons. If ' +
    'enabled, align the colon inside DAGArg which have line break inside.  ' +
    'This works only when TableHenBreakInsideDAGArg is BreakElements or ' +
    'BreakAll and the DAGArg is not excepted by ' +
    'TableGenBreakingDAGArgOperators\'s effect.',
  codeSnippet:
    'def Def       : Parent {}\n' +
    'def DefDef    : Parent {}\n' +
    'def DefDefDef : Parent {}\n',
  note: '',
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
    },
    {
      type: typeof (bool),
      title: 'AcrossEmptyLines',
      desc: 'Whether to align across empty lines',
      codeSnippet:
        'true:\n' +
        'int a            = 1\n' +
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

const RuleAlignEscapedNewlines = {
  version: 5,
  title: 'Align Escaped Newlines',
  desc: 'Options for aligning backslashes in escaped newlines.',
  options: [
    {
      title: 'ENAS_DontAlign',
      config: 'DontAlign',
      desc: 'Don\'t align escaped newlines.',
      codeSnippet:
        '#define A \\\n' +
        '  int aaaa; \\\n' +
        '  int b; \\\n' +
        '  int ddddddddddd;'
    },
    {
      title: 'ENAS_Left',
      config: 'Left',
      desc: 'Align escaped newlines as far left as possible.',
      codeSnippet:
        '#define A   \\\n' +
        '  int aaaa; \\\n' +
        '  int b;    \\\n' +
        '  int ddddddddddd;'
    },
    {
      title: 'ENAS_LeftWithLastLine',
      config: 'LeftWithLastLine',
      desc: 'Align escaped newlines as far left as possible, using the last ' +
        'line of the preprocessor directive as the reference if it\n the ' +
        'longest.',
      codeSnippet:
        '#define A          \\\n' +
        '  int aaaa;        \\\n' +
        '  int b;           \\\n' +
        '  int ddddddddddd;'
    },
    {
      title: 'ENAS_Right',
      config: 'Right',
      desc: 'Align escaped newlines in the right-most column.',
      codeSnippet:
        '#define A                                           \\\n' +
        '  int aaaa;                                         \\\n' +
        '  int b;                                            \\\n' +
        '  int ddddddddddd;'
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
