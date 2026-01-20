
set - display and change shell variables

   set [SCOPE_OPTIONS]
   set [OPTIONS] VARIABLE_NAME VALUES...
   set [OPTIONS] VARIABLE_NAME[INDICES]... VALUES...
   set ( -q | --query ) [SCOPE_OPTIONS] VARIABLE_NAMES...
   set ( -e | --erase ) [SCOPE_OPTIONS] VARIABLE_NAME...
   set ( -e | --erase ) [SCOPE_OPTIONS] VARIABLE_NAME[INDICES]...
   set ( -S | --show ) [VARIABLE_NAME]...

[1mDESCRIPTION[0m
[1mset[0m manipulates shell variables.

If  set  is  called with no arguments, the names and values of all shell variables are printed in sorted order. If some of the scope or
export flags have been given, only the variables matching the specified scope are printed.

With both variable names and values provided, [1mset[0m assigns the variable [1mVARIABLE[0m[4m_[24m[1mNAME[0m the values [1mVALUES...[0m.

The following options control variable scope:

• [1m-a[0m or [1m--append[0m causes the values to be appended to the current set of values for the variable. This can be  used  with  [1m--prepend[0m  to
  both append and prepend at the same time. This cannot be used when assigning to a variable slice.

• [1m-p[0m  or  [1m--prepend[0m  causes the values to be prepended to the current set of values for the variable. This can be used with [1m--append[0m to
  both append and prepend at the same time. This cannot be used when assigning to a variable slice.

• [1m-l[0m or [1m--local[0m forces the specified shell variable to be given a scope that is local to the current block, even if a variable with the
  given name exists and is non-local

• [1m-g[0m or [1m--global[0m causes the specified shell variable to be given a global scope. Non-global variables disappear when the block they be‐
  long to ends

• [1m-U[0m or [1m--universal[0m causes the specified shell variable to be given a universal scope. If this option is supplied, the variable will be
  shared between all the current user's fish instances on the current computer, and will be preserved across restarts of the shell.

• [1m-x[0m or [1m--export[0m causes the specified shell variable to be exported to child processes (making it an "environment variable")

• [1m-u[0m or [1m--unexport[0m causes the specified shell variable to NOT be exported to child processes

• [1m--path[0m  causes the specified variable to be treated as a path variable, meaning it will automatically be split on colons,  and joined
  using colons when quoted ([4mecho[24m [4m"$PATH"[24m) or exported.

• [1m--unpath[0m causes the specified variable to not be treated as a path variable. Variables with a name ending in "PATH" are automatically
  path variables, so this can be used to treat such a variable normally.

The following options are available:

• [1m-e[0m or [1m--erase[0m causes the specified shell variables to be erased

• [1m-q[0m  or [1m--query[0m test if the specified variable names are defined. Does not output anything, but the builtins exit status is the number
  of variables specified that were not defined, or 255 if more than 255 variables are not defined.

• [1m-n[0m or [1m--names[0m List only the names of all defined variables, not their value. The names are guaranteed to be sorted.

• [1m-S[0m or [1m--show[0m Shows information about the given variables. If no variable names are given then all variables are shown in  sorted  or‐
  der.  It  shows  the scopes the given variables are set in, along with the values in each and whether or not it is exported. No other
  flags can be used with this option.

• [1m-L[0m or [1m--long[0m do not abbreviate long values when printing set variables

If a variable is set to more than one value, the variable will be a list with the specified elements. If a variable is set to zero ele‐
ments, it will become a list with zero elements.

If  the  variable  name  is  one or more list elements, such as [1mPATH[1[0m [1m3[0m [1m7][0m, only those list elements specified will be changed. If you
specify a negative index when expanding or assigning to a list variable, the index will be calculated from the end of the list. For ex‐
ample, the index -1 means the last index of a list.

The scoping rules when creating or updating a variable are:

• Variables may be explicitly set to universal, global or local. Variables with the same name in different scopes will not be changed.

• If  a  variable is not explicitly set to be either universal, global or local, but has been previously defined, the previous variable
  scope is used.

• If a variable is not explicitly set to be either universal, global or local and has never before been defined, the variable  will  be
  local  to  the  currently executing function. Note that this is different from using the [1m-l[0m or [1m--local[0m flag. If one of those flags is
  used, the variable will be local to the most inner currently executing block, while without these the variable will be local  to  the
  function. If no function is executing, the variable will be global.

The exporting rules when creating or updating a variable are identical to the scoping rules for variables:

• Variables may be explicitly set to either exported or not exported. When an exported variable goes out of scope, it is unexported.

• If  a variable is not explicitly set to be exported or not exported, but has been previously defined, the previous exporting rule for
  the variable is kept.

• If a variable is not explicitly set to be either exported or unexported and has never before been defined, the variable will  not  be
  exported.

In query mode, the scope to be examined can be specified.

In erase mode, if variable indices are specified, only the specified slices of the list variable will be erased.

[1mset[0m requires all options to come before any other arguments. For example, [1mset[0m [1mflags[0m [1m-l[0m will have the effect of setting the value of the
variable [1mflags[0m to '-l', not making the variable local.

[1mEXIT[0m [1mSTATUS[0m
In assignment mode, [1mset[0m does not modify the exit status, but passes along whatever $status was set, including by command substitutions.
This allows capturing the output and exit status of a subcommand, like in [1mif[0m [1mset[0m [1moutput[0m [1m(command)[0m.

In query mode, the exit status is the number of variables that were not found.

In erase mode, [1mset[0m exits with a zero exit status in case of success, with a non-zero exit status if the commandline was invalid, if any
of the variables did not exist or was a special read-only variable.

[1mEXAMPLES[0m
   # Prints all global, exported variables.
   set -xg

   # Sets the value of the variable $foo to be 'hi'.
   set foo hi

   # Appends the value "there" to the variable $foo.
   set -a foo there

   # Does the same thing as the previous two commands the way it would be done pre-fish 3.0.
   set foo hi
   set foo $foo there

   # Removes the variable $smurf
   set -e smurf

   # Changes the fourth element of the $PATH list to ~/bin
   set PATH[4] ~/bin

   # Outputs the path to Python if ``type -p`` returns true.
   if set python_path (type -p python)
       echo "Python is at $python_path"
   end

   # Setting a variable doesn't modify $status!
   false
   set foo bar
   echo $status # prints 1, because of the "false" above.

   true
   set foo banana (false)
   echo $status # prints 1, because of the "(false)" above.

   # Like other shells, pass a variable to just one command:
   # Run fish with a temporary home directory.
   HOME=(mktemp -d) fish
   # Which is essentially the same as:
   begin; set -lx HOME (mktemp -d); fish; end

[1mNOTES[0m
Fish versions prior to 3.0 supported the syntax [1mset[0m [1mPATH[1][0m [1mPATH[4][0m [1m/bin[0m [1m/sbin[0m, which worked like [1mset[0m [1mPATH[1[0m [1m4][0m [1m/bin[0m [1m/sbin[0m. This syntax
was not widely used, and was ambiguous and inconsistent.
