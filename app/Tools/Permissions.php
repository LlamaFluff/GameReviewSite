<?php

namespace App\Tools;
use Silber\Bouncer\BouncerFacade as Bouncer;

class Permissions
{
    public static function check($permission)
    {
        if(env('PERMISSIONS_OVERRIDE'))
            return true;
        return Bouncer::allows($permission);
    }

}