  function p1(x)
  {
    return x+3;
  }
  function p2(x)
  {
    return x+5;
  }
  var coherence = 0;
  function start()
  {
    var x = 5;
    document.getElementById("memory").innerHTML = x;
    if(coherence == 0)
    {
      x = 5;
      var c1 = p1(x);
      document.getElementById("cache1").innerHTML = c1;
      var c2 = p2(x);
      x = c1;
      x = c2;
      document.getElementById("cache2").innerHTML = c2;
      document.getElementById("memory").innerHTML = x;
    }
    else if(coherence == 1)
    {
      x = 5;
      var c1 = p1(x);
      x = c1;
      var c2 = c1;
      c2 = p2(x);
      x = c2;
      c1 = c2;
      document.getElementById("cache1").innerHTML = c1;
      document.getElementById("cache2").innerHTML = c2;
      document.getElementById("memory").innerHTML = x;
    }
    if(c1 != c2)
    document.getElementById("processStatusp").innerHTML = "Caches are Incoherent";
    else {
    document.getElementById("processStatusp").innerHTML = "Caches are Coherent";
    }
  }
  function coherent()
  {
    document.getElementById("processStatusp").innerHTML = "Caches are Coherent";
    coherence = 1;
  }
  function incoherent()
  {
    document.getElementById("processStatusp").innerHTML = "Caches are Incoherent";
    coherence = 0;
  }
