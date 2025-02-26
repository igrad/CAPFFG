const RuleAccessModifierOffset = {
  version: 3.3,
  type: null,
  title: 'Access Modifier Offset',
  desc: 'The extra indent or outdent of access modifiers, e.g. `public:`.'
}

const RuleAlignAfterOpenBracket = {
  version: 3.8,
  type: typeof (object),
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
  type: null,
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
  subOptions: [
    {
      type: typeof (bool),
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
          desc: '',
          codeSnippet:
            ''
        }
      ]
    },
    {
      type: typeof (bool),
      title: '',
      desc: '',
      codeSnippet:
        '',
      options: [
        {
          title: 'true',
          desc: '',
          codeSnippet:
            ''
        }
      ]
    },
    {
      type: typeof (bool),
      title: '',
      desc: '',
      codeSnippet:
        '',
      options: [
        {
          title: 'true',
          desc: '',
          codeSnippet:
            ''
        }
      ]
    },
    {
      type: typeof (bool),
      title: '',
      desc: '',
      codeSnippet:
        '',
      options: [
        {
          title: 'true',
          desc: '',
          codeSnippet:
            ''
        }
      ]
    },
    {
      type: typeof (bool),
      title: '',
      desc: '',
      codeSnippet:
        '',
      options: [
        {
          title: 'true',
          desc: '',
          codeSnippet:
            ''
        }
      ]
    },
    {
      type: typeof (bool),
      title: '',
      desc: '',
      codeSnippet:
        '',
      options: [
        {
          title: 'true',
          desc: '',
          codeSnippet:
            ''
        }
      ]
    }
  ]
}

const Rule = {
  version: 0,
  type: null,
  title: '',
  desc: '',
  note: '',
  subOptions: [
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
      title: '',
      config: '',
      desc: '',
      codeSnippet:
        ''
    }
  ]
}
