function triNum(n)
{
    if (n<=1)
        return n;
    let num = 0;
    num = n + triNum(n-1)
    return num;
}
console.log(triNum(9))