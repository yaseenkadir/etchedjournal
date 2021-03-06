package com.etchedjournal.etched

import com.etchedjournal.etched.security.ExceptionHandledFilter
import com.etchedjournal.etched.utils.clock.Clock
import com.etchedjournal.etched.utils.id.CamflakeIdGenerator
import com.etchedjournal.etched.utils.id.IdGenerator
import com.etchedjournal.etched.utils.id.camflake.Camflake
import com.fasterxml.jackson.databind.ObjectMapper
import org.jooq.SQLDialect
import org.jooq.conf.Settings
import org.slf4j.MDC
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter
import java.security.Principal
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Configuration
class EtchedConfig {

    @Bean
    fun idGenerator(camflake: Camflake): IdGenerator {
        return CamflakeIdGenerator(camflake)
    }

    @Bean
    fun camflake(): Camflake {
        return Camflake()
    }

    @Bean
    fun exceptionHandlerFilter(mapper: ObjectMapper): ExceptionHandledFilter {
        return ExceptionHandledFilter(mapper = mapper)
    }

    @Bean
    fun jooqSettings(): Settings {
        return Settings().withExecuteWithOptimisticLocking(true)
    }

    @Bean
    fun sqlDialect(): SQLDialect {
        return SQLDialect.POSTGRES_10
    }

    @Bean
    fun clock(): Clock {
        return Clock.INSTANCE
    }
}

/**
 * Configures logging to include user id in log messages
 *
 * https://moelholm.com/2016/08/16/spring-boot-enhance-your-logging/
 */
@Component
class UserIdLoggerFilter : OncePerRequestFilter() {
    override fun doFilterInternal(
        request: HttpServletRequest,
        response: HttpServletResponse,
        filterChain: FilterChain
    ) {
        try {
            val principal: Principal? = SecurityContextHolder.getContext()
                ?.authentication
                ?.principal as Principal?
            val userId = principal?.name ?: "anonymous"
            MDC.put("userId", userId)
            filterChain.doFilter(request, response)
        } finally {
            MDC.clear()
        }
    }
}
