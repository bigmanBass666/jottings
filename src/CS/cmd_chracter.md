# cmd character

文件扩展名为reg, 双击运行, 可更改cmd与powershell字符编码为utf8

```reg
Windows Registry Editor Version 5.00
 
 
 
[HKEY_CURRENT_USER\Console\%SystemRoot%_system32_cmd.exe]
 
"CodePage"=dword:0000fde9
 
"FontFamily"=dword:00000036
 
"FontWeight"=dword:00000190
 
"FaceName"="Consolas"
 
"ScreenBufferSize"=dword:232900d2
 
"WindowSize"=dword:002b00d2
```
