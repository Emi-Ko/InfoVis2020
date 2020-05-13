class Vec3
{
  // Constructor
  constructor( x, y, z )
  {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  // Methods

  // Add method
  add( v )
  {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  }

  // Sum method
  sum ()
  {
    return this.x + this.y + this.z;
  }


  // Task2

  // Min method
  min ()
  {
    let min;
    if(this.x < this.y){
      min = this.x;
    }
    else{
      min = this.y;
    }
    if(this.z < min){
      min = this.z;
    }
    return min;
  }

  // Mid method
  mid ()
  {
    let min = this.min();
    let max = this.max();
    if(this.x != min){
      if(this.x != max){
        return this.x;
      }
    }
    if(this.y != min){
      if(this.y != max){
        return this.y;
      }
    }
    if(this.z != min){
      if(this.z != max){
        return this.z;
      }
    }
  }

  // Max method
  max ()
  {
    let max;
    if( this.x < this.y ){
      max = this.y;
    }
    else{
      max = this.x;
    }
    if ( max < this.z ){
      max = this.z;
    }
    return max;
  }

}
